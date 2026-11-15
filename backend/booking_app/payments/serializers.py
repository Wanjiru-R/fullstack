from rest_framework import serializers  
from .models import Payment


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Payment
        fields = ["id","phone_number","amount","status","checkout_request_id","mpesa_receipt_number"]