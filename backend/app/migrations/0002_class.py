# Generated by Django 4.1.2 on 2022-10-26 15:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Class',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('group_id', models.CharField(max_length=32)),
                ('teacher_id', models.CharField(max_length=32)),
                ('teacher_name', models.CharField(max_length=256)),
                ('student_id', models.CharField(max_length=32)),
                ('student_name', models.CharField(max_length=256)),
                ('category_type', models.CharField(max_length=20)),
                ('category_value', models.CharField(max_length=50)),
                ('class_timestamp', models.CharField(max_length=20)),
                ('is_active', models.BooleanField()),
                ('is_completed', models.BooleanField()),
                ('is_rescheduled', models.BooleanField()),
                ('is_cancelled', models.BooleanField()),
                ('meeting_link', models.CharField(max_length=256)),
                ('payment_id', models.CharField(max_length=32)),
                ('payment_amount', models.IntegerField()),
                ('payment_timestamp', models.CharField(max_length=20)),
            ],
            options={
                'db_table': 'class',
                'managed': True,
            },
        ),
    ]