from django.urls import path
from . import views

urlpatterns = [
  path('', views.contact),
  path('send-message/', views.send_message),
]