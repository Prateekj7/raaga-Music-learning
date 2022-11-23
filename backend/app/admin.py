from django.contrib import admin
from .models import *


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'contact_number', 'email_id', 'gender', 'image_url']

@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'gender', 'location', 'city', 'state', 'pin_code', 'about', 'qualification', 
    'contact_number', 'email_id', 'achievement', 'experience', 'schedule', 'rating', 'reviews', 
    'like_count', 'student_count', 'image_url', 'video_url']
    search_fields = ['id', 'schedule']
    list_filter = ['gender']

@admin.register(Vocal)
class VocalAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']

@admin.register(Instrumental)
class InstrumentalAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']

@admin.register(Class)
class ClassAdmin(admin.ModelAdmin):
    list_display = ['id', 'group_id', 'teacher_id', 'teacher_name', 'student_id', 'student_name', 'category_type', 'category_value',
    'class_timestamp', 'is_active', 'is_completed', 'is_rescheduled', 'is_cancelled', 'meeting_link', 'payment_id', 'payment_amount', 
    'payment_timestamp']
