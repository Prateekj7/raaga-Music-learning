from django.db import models

class Student(models.Model):
    id = models.BigAutoField(primary_key=True, serialize=False)
    name = models.CharField(max_length=256)
    contact_number = models.CharField(max_length=20)
    email_id = models.CharField(max_length=256)
    gender = models.CharField(max_length=6)

    class Meta:
        managed = True
        db_table = 'student'

class Teacher(models.Model):
    id = models.BigAutoField(primary_key=True, serialize=False)
    name = models.CharField(max_length=256)
    gender = models.CharField(max_length=6)
    location = models.CharField(max_length=100, null = True)
    city = models.CharField(max_length=40, null = True)
    state = models.CharField(max_length=50, null = True)
    pin_code = models.IntegerField(null = True)
    about = models.TextField(null = True)
    qualification = models.CharField(max_length=50, null = True)
    contact_number = models.CharField(max_length=20, null = True)
    email_id = models.CharField(max_length=256, null = True)
    achievement = models.CharField(max_length=50, null = True)
    experience = models.IntegerField(null = True)
    class_mode = models.CharField(max_length=7, null = True)
    schedule = models.JSONField(null = True)
    rating = models.FloatField(null = True)
    reviews = models.JSONField(null = True)
    like_count = models.IntegerField(null = True)
    student_count = models.IntegerField(null = True)
    image_url = models.CharField(max_length=50, null = True)
    video_url = models.CharField(max_length=50, null = True)

    class Meta:
        managed = True
        db_table = 'teacher'

class Vocal(models.Model):
    id = models.BigAutoField(primary_key=True, serialize=False)
    name = models.CharField(max_length=50)

    class Meta:
        managed = True
        db_table = 'vocal'

class Instrumental(models.Model):
    id = models.BigAutoField(primary_key=True, serialize=False)
    name = models.CharField(max_length=50)

    class Meta:
        managed = True
        db_table = 'instrumental'

class Class(models.Model):
    id = models.BigAutoField(primary_key=True, serialize=False)
    group_id = models.CharField(max_length=32)
    teacher_id = models.CharField(max_length=32)
    teacher_name = models.CharField(max_length=256)
    student_id = models.CharField(max_length=32)
    student_name = models.CharField(max_length=256)
    category_type = models.CharField(max_length=20)
    category_value = models.CharField(max_length=50)
    class_timestamp = models.CharField(max_length=20)
    is_active = models.BooleanField()
    is_completed = models.BooleanField()
    is_rescheduled = models.BooleanField()
    is_cancelled = models.BooleanField()
    meeting_link = models.CharField(max_length=256)
    payment_id = models.CharField(max_length=32)
    payment_amount = models.IntegerField()
    payment_timestamp = models.CharField(max_length=20)

    class Meta:
        managed = True
        db_table = 'class'