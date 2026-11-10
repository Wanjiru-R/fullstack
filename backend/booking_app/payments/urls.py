from django.urls import path
from . import views

urlpatterns = [
    path('stk-push/', views.payment_view, name='stk_push'),
    path('callback/', views.payment_callback, name='payment_callback'),
    path('stk-status/', views.stk_status_view, name='stk_status'),
]