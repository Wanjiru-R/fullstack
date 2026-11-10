from django.shortcuts import render

import requests, base64, json, re, os
from datetime import datetime
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponseBadRequest
from .models import Payment
from decimal import Decimal, InvalidOperation

from dotenv import load_dotenv


load_dotenv()


CONSUMER_KEY = os.getenv("CONSUMER_KEY")
CONSUMER_SECRET = os.getenv("CONSUMER_SECRET")
MPESA_SHORTCODE = os.getenv("MPESA_SHORTCODE")
MPESA_PASSKEY = os.getenv("MPESA_PASSKEY")
SHORTCODE = os.getenv("SHORTCODE")
CALLBACK_URL = os.getenv("CALLBACK_URL")
MPESA_BASE_URL = os.getenv("MPESA_BASE_URL")


def format_phone_number(phone):
    phone = phone.replace("+", "")
    if re.match(r"^254\d{9}$", phone):
        return phone
    elif phone.startswith("0") and len(phone) == 10:
        return "254" + phone[1:]
    else:
        raise ValueError("Invalid phone number format")


def generate_access_token():
    try:
        credentials = f"{CONSUMER_KEY}:{CONSUMER_SECRET}"
        encoded_credentials = base64.b64encode(credentials.encode()).decode()

        headers = {
            "Authorization": f"Basic {encoded_credentials}",
            "Content-Type": "application/json",
        }
        response = requests.get(
            f"{MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials",
            headers=headers,
        ).json()

        if "access_token" in response:
            return response["access_token"]
        else:
            raise Exception("Access token missing in response.")

    except requests.RequestException as e:
        raise Exception(f"Failed to connect to M-Pesa: {str(e)}")


def initiate_stk_push(phone, amount):
    try:
        token = generate_access_token()
        headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}

        timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
        stk_password = base64.b64encode(
            (MPESA_SHORTCODE + MPESA_PASSKEY + timestamp).encode()
        ).decode()

        request_body = {
            "BusinessShortCode": MPESA_SHORTCODE,
            "Password": stk_password,
            "Timestamp": timestamp,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": amount,
            "PartyA": phone,
            "PartyB": MPESA_SHORTCODE,
            "PhoneNumber": phone,
            "CallBackURL": CALLBACK_URL,
            "AccountReference": "account",
            "TransactionDesc": "Payment for goods",
        }

        response = requests.post(
            f"{MPESA_BASE_URL}/mpesa/stkpush/v1/processrequest",
            json=request_body,
            headers=headers,
        ).json()

        return response

    except Exception as e:
        print(f"Failed to initiate STK Push: {str(e)}")
        return e



def query_stk_push(checkout_request_id):
    print("Quering...")
    try:
        token = generate_access_token()
        headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}

        timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
        password = base64.b64encode(
            (MPESA_SHORTCODE + MPESA_PASSKEY + timestamp).encode()
        ).decode()

        request_body = {
            "BusinessShortCode": MPESA_SHORTCODE,
            "Password": password,
            "Timestamp": timestamp,
            "CheckoutRequestID": checkout_request_id
        }

        response = requests.post(
            f"{MPESA_BASE_URL}/mpesa/stkpushquery/v1/query",
            json=request_body,
            headers=headers,
        )
        print(response.json())
        return response.json()

    except requests.RequestException as e:
        print(f"Error querying STK status: {str(e)}")
        return {"error": str(e)}

# View to query the STK status and return it to the frontend
def stk_status_view(request):
    if request.method == 'POST':
        try:
            # Parse the JSON body
            data = json.loads(request.body)
            checkout_request_id = data.get('checkout_request_id')
            print("CheckoutRequestID:", checkout_request_id)

            # Query the STK push status using your backend function
            status = query_stk_push(checkout_request_id)

            # Return the status as a JSON response
            return JsonResponse({"status": status})
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON body"}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=405)

@csrf_exempt # This view is called by M-Pesa when the payment process is completed (either success or failure)
def payment_callback(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST required"}, status=405)

    try:
        callback_data = json.loads(request.body)
        stk_callback = callback_data["Body"]["stkCallback"]

        checkout_id = stk_callback["CheckoutRequestID"]
        result_code = stk_callback["ResultCode"]
        result_desc = stk_callback.get("ResultDesc", "")

        payment = Payment.objects.filter(
            checkout_request_id=checkout_id
        ).first()

        if not payment:
            return JsonResponse({
                "ResultCode": 0,
                "ResultDesc": "Callback received; payment record not found"
            })

        if result_code == 0:
            metadata = stk_callback.get("CallbackMetadata", {}).get("Item", [])

            values = {
                item["Name"]: item.get("Value")
                for item in metadata
            }

            payment.amount = values.get("Amount", payment.amount)
            payment.mpesa_receipt_number = values.get("MpesaReceiptNumber")
            payment.phone_number = str(
                values.get("PhoneNumber", payment.phone_number)
            )
            payment.status = Payment.StatusChoices.COMPLETED

        else:
            payment.status = Payment.StatusChoices.FAILED

        payment.save()

        return JsonResponse({
            "ResultCode": 0,
            "ResultDesc": "Callback processed successfully"
        })

    except (json.JSONDecodeError, KeyError, TypeError) as e:
        return JsonResponse({
            "ResultCode": 1,
            "ResultDesc": f"Invalid callback data: {str(e)}"
        }, status=400)
     
@csrf_exempt
def payment_view(request):
    if request.method != "POST":
        return JsonResponse({"error": "Only POST requests are allowed"}, status=405)

    try:
        if request.content_type == "application/json":
            data = json.loads(request.body)
        else:
            data = request.POST

        phone = format_phone_number(data.get("phone", ""))
        amount = Decimal(str(data.get("amount", "")))

        if amount <= 0 or amount != amount.to_integral_value():
            return JsonResponse(
                {"error": "Amount must be a positive whole number"},
                status=400
            )

        response = initiate_stk_push(phone, int(amount))

        if not isinstance(response, dict):
            return JsonResponse(
                {"error": "Could not communicate with M-Pesa"},
                status=502
            )

        if response.get("ResponseCode") != "0":
            return JsonResponse({
                "error": "STK Push request was rejected",
                "details": response
            }, status=400)

        checkout_id = response.get("CheckoutRequestID")

        if not checkout_id:
            return JsonResponse({
                "error": "M-Pesa did not return a CheckoutRequestID",
                "details": response
            }, status=502)

        payment = Payment.objects.create(
            phone_number=phone,
            amount=amount,
            checkout_request_id=checkout_id,
            merchant_request_id=response.get("MerchantRequestID"),
            status=Payment.StatusChoices.PENDING
        )

        return JsonResponse({
            "message": "STK Push sent. Check your phone.",
            "payment_id": payment.id,
            "checkout_request_id": checkout_id,
            "customer_message": response.get("CustomerMessage")
        })

    except (ValueError, InvalidOperation, json.JSONDecodeError) as e:
        return JsonResponse({"error": str(e)}, status=400)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)