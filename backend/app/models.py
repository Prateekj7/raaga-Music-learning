from django.db import models
import uuid

class Student(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=256)
    contact_number = models.CharField(max_length=20)
    email_id = models.CharField(max_length=256)
    gender = models.CharField(max_length=6)
    image_url = models.CharField(max_length=256, null=True, blank=True)

    class Meta:
        managed = True
        db_table = 'student'

class Teacher(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=256)
    gender = models.CharField(max_length=6)
    location = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=40, null=True, blank=True)
    state = models.CharField(max_length=50, null=True, blank=True)
    pin_code = models.IntegerField(null=True, blank=True)
    about = models.TextField(null=True, blank=True)
    qualification = models.CharField(max_length=50, null=True, blank=True)
    contact_number = models.CharField(max_length=20)
    email_id = models.CharField(max_length=256)
    achievement = models.CharField(max_length=50, null=True, blank=True)
    experience = models.IntegerField(null=True, blank=True)
    schedule = models.JSONField(null=True, blank=True)
    rating = models.FloatField(null=True, blank=True)
    reviews = models.JSONField(null=True, blank=True)
    like_count = models.IntegerField(null=True, blank=True)
    student_count = models.IntegerField(null=True, blank=True)
    image_url = models.CharField(max_length=256, null=True, blank=True)
    video_url = models.CharField(max_length=256, null=True, blank=True)

    class Meta:
        managed = True
        db_table = 'teacher'

class Vocal(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)

    class Meta:
        managed = True
        db_table = 'vocal'

class Instrumental(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)

    class Meta:
        managed = True
        db_table = 'instrumental'

class Class(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    group_id = models.CharField(max_length=36)
    teacher_id = models.CharField(max_length=36)
    teacher_name = models.CharField(max_length=256)
    student_id = models.CharField(max_length=36)
    student_name = models.CharField(max_length=256)
    category_type = models.CharField(max_length=20)
    category_value = models.CharField(max_length=50)
    class_timestamp = models.CharField(max_length=20)
    is_active = models.BooleanField()
    is_completed = models.BooleanField()
    is_rescheduled = models.BooleanField()
    is_cancelled = models.BooleanField()
    meeting_link = models.CharField(max_length=256)
    payment_id = models.CharField(max_length=36)
    payment_amount = models.IntegerField()
    payment_timestamp = models.CharField(max_length=20)

    class Meta:
        managed = True
        db_table = 'class'