# from django.db import models

<<<<<<< HEAD
# class Payment(models.Model):
#     amount = models.DecimalField(max_digits=10, decimal_places=2)
#     phone_number = models.CharField(max_length=15)
#     timestamp = models.DateTimeField(auto_now_add=True)
#     status = models.CharField(max_length=20, default='pending')
#     checkout_id = models.CharField(max_length=100, unique=True)
#     mpesa_code = models.CharField(max_length=100, blank=True, null=True)

#     def __str__(self):
#         return f"{self.mpesa_code} - {self.amount} KES"
=======
class Payment(models.Model):
    class StatusChoices(models.TextChoices):
        PENDING = 'pending', 'Pending'
        COMPLETED = 'completed', 'Completed'
        CANCELED = 'canceled', 'Canceled'
        FAILED = 'failed', 'Failed'
        
    phone_number = models.CharField(max_length=15)
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    checkout_request_id = models.CharField(
        max_length=100,
        unique=True,
        null=True,
        blank=True
    )

    merchant_request_id = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    mpesa_receipt_number = models.CharField(
        max_length=30,
        blank=True,
        null=True
    )

    status = models.CharField(
        max_length=20,
        choices=StatusChoices.choices,
        default=StatusChoices.PENDING
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.mpesa_receipt_number} - {self.amount} KES"
>>>>>>> pr-2
