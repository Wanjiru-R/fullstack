# from django.db import models

# class Payment(models.Model):
#     amount = models.DecimalField(max_digits=10, decimal_places=2)
#     phone_number = models.CharField(max_length=15)
#     timestamp = models.DateTimeField(auto_now_add=True)
#     status = models.CharField(max_length=20, default='pending')
#     checkout_id = models.CharField(max_length=100, unique=True)
#     mpesa_code = models.CharField(max_length=100, blank=True, null=True)

#     def __str__(self):
#         return f"{self.mpesa_code} - {self.amount} KES"
