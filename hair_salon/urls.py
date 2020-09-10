from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    # path('about/', views.about, name='about'),
    # path('gallery/', views.gallery, name='gallery'),
    # path('services/', views.services, name='services'),
]


