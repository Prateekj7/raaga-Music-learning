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
    location = models.CharField(max_length=100)
    city = models.CharField(max_length=40)
    state = models.CharField(max_length=50)
    pin_code = models.IntegerField()
    about = models.TextField()
    qualification = models.CharField(max_length=50)
    contact_number = models.CharField(max_length=20)
    email_id = models.CharField(max_length=256)
    achievement = models.CharField(max_length=50)
    experience = models.IntegerField()
    class_mode = models.CharField(max_length=7)
    schedule = models.JSONField()
    rating = models.FloatField()
    reviews = models.JSONField()
    like_count = models.IntegerField()
    student_count = models.IntegerField()
    image_url = models.CharField(max_length=50)
    video_url = models.CharField(max_length=50)

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
