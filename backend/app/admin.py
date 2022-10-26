from django.contrib import admin
from .models import *


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'contact_number', 'email_id', 'gender']

@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'gender', 'location', 'city', 'state', 'pin_code', 'about', 'qualification', 
    'contact_number', 'email_id', 'achievement', 'experience', 'class_mode', 'schedule', 'rating', 'reviews', 
    'like_count', 'student_count', 'image_url', 'video_url'
    ]

@admin.register(Vocal)
class VocalAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']

@admin.register(Instrumental)
class InstrumentalAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
