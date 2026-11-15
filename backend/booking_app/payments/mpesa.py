import base64
import re
from datetime import datetime

import requests
from django.conf import settings

BASE = (
    "https://sandbox.safaricom.co.ke"
    if settings.MPESA_ENV == "sandbox"
    else "https://api.safaricom.co.ke"
)


def normalize_phone(phone: str) -> str:
    phone = re.sub(r"\D", "", phone)  # digits only
    if phone.startswith("0"):
        phone = "254" + phone[1:]
    if not re.fullmatch(r"254[17]\d{8}", phone):
        raise ValueError("Enter a valid Safaricom number, e.g. 0712345678")
    return phone


def get_token() -> str:
    r = requests.get(
        f"{BASE}/oauth/v1/generate?grant_type=client_credentials",
        auth=(settings.CONSUMER_KEY, settings.CONSUMER_SECRET),
        timeout=30,
    )
    r.raise_for_status()
    return r.json()["access_token"]


def stk_push(phone: str, amount: int, reference: str) -> dict:
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    password = base64.b64encode(
        f"{settings.MPESA_SHORTCODE}{settings.MPESA_PASSKEY}{timestamp}".encode()
    ).decode()

    payload = {
        "BusinessShortCode": settings.MPESA_SHORTCODE,
        "Password": password,
        "Timestamp": timestamp,
        "TransactionType": "CustomerPayBillOnline",
        "Amount": amount,
        "PartyA": phone,
        "PartyB": settings.MPESA_SHORTCODE,
        "PhoneNumber": phone,
        "CallBackURL": settings.CALLBACK_URL,
        "AccountReference": reference,
        "TransactionDesc": "Booking payment",
    }
    r = requests.post(
        f"{BASE}/mpesa/stkpush/v1/processrequest",
        json=payload,
        headers={"Authorization": f"Bearer {get_token()}"},
        timeout=30,
    )
    return r.json()