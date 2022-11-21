"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app.views import *

admin.site.site_header  =  "Raaga Admin Page"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/hello_world/', foo),
    path('api/insert_data/', insert_data),
    path('api/read_data/', read_data),
    path('api/read_teacher_main_data/', read_teacher_main_data),
    path('api/read_teacher_metadata/', read_teacher_metadata),
    path('api/read_teacher_reviews/', read_teacher_reviews),
    path('api/read_teacher_schedules/', read_teacher_schedules),
    path('api/update_count/', update_count),
    path('api/send_otp/', send_otp),
    path('api/verify_otp/', verify_otp),
    path('api/generate_payment_order/', generate_payment_order),
    path('api/generate_payment_order/validate_payment_order/', validate_payment_order),
    path('api/book_class/', book_class),
    path('api/check_user_existance/', check_user_existance),
    path('api/get_csrf_token/', get_csrf_token),
    path('api/read_teacher_raw_schedule/', read_teacher_raw_schedule),
]
