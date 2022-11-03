from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
import psycopg2
from psycopg2.extras import execute_values
import pandas as pd
from .handlers.otp_handler import *
from .handlers.sms_handler import *
from .handlers.payment_handler import *
from .handlers.meeting_handler import *
import json
import hashlib
import datetime
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token
from django.conf import settings
import uuid

def get_cursor():
    conn = psycopg2.connect(
            host=settings.DATABASES['default']['HOST'],
            database=settings.DATABASES['default']['NAME'],
            user=settings.DATABASES['default']['USER'],
            password=settings.DATABASES['default']['PASSWORD'],
            port=settings.DATABASES['default']['PORT']
            )

    # create a cursor
    curr = conn.cursor()
    return curr

curr = get_cursor()

def execute_query(query, curr):
    def execute():
        curr.execute("ROLLBACK")
        curr.execute(query)

    try:
        execute()
        print("DB Connected")
    except Exception as e:
        print("Exception", e)
        print("DB Re-Connecting")
        curr = get_cursor()
        execute()

def get_query_results(curr, is_multiple_reading = False):
    rows = curr.fetchall()

    df = pd.DataFrame(rows)
    if len(rows) > 0:
        df.columns = [entry[0] for entry in curr.description]

    results = df.to_dict('records')

    if is_multiple_reading:
        return results
    else:
        if len(results) == 1:
            return results[0]
        else:
            return []

def generate_id(inserted_data_dict):
    ref_data = str(inserted_data_dict)
    return hashlib.md5(ref_data.encode()).hexdigest()

@api_view(['GET'])
def get_csrf_token(request):
    return Response({'csrf_token': get_token(request)})

@api_view(['GET'])
def foo(request):
    print(request.data)
    return HttpResponse("Hello World!")

@api_view(['POST'])
def check_user_existance(request):
    def check_existance(table):
        query = f"SELECT id FROM {table} WHERE contact_number = '{phone}'"
    
        execute_query(query, curr)
        result = curr.fetchall()

        return result
    
    params = request.data
    phone = params['phone']

    result = check_existance('student')
    if len(result):
        id = result[0][0]
        return Response({'id': id, 'type': "student"})
    else:
        result = check_existance('teacher')
        if len(result):
            id = result[0][0]
            return Response({'id': id, 'type': "teacher"})
        else:
            return Response(None)

@api_view(['POST'])
def insert_data(request):
    params = request.data

    table = params['table']
    data = params['data']

    data['id'] = str(uuid.uuid4())

    columns = data.keys()
    values = data.values()
    
    query = "INSERT INTO {} ({}) VALUES {}".format(table, ', '.join(columns), tuple(values))
    
    execute_query(query, curr)
    
    return Response('ok')

@api_view(['POST'])
def read_data(request):
    params = request.data

    table = params['table']
    limit = params['page_size']
    offset = (params['page_number'] - 1) * limit
    columns = params['columns']
    id = params['id']
    if id == '*':
        val = 'IS NOT NULL'
    else:
        val = '= ' + id

    query = "SELECT {} FROM {} where id {} limit {} offset {}".format(', '.join(columns), table, val, limit, offset)
    
    execute_query(query, curr)
    results = get_query_results(curr)
    
    return Response(results)


@api_view(['POST'])
def read_teacher_main_data(request):
    params = request.data
    
    limit = params['page_size']
    offset = (params['page_number'] - 1) * limit
    category_name = params['category_name']
    category_value = params['category_value']

    query = f"SELECT id, name, experience, rating, schedule -> '{category_name}' -> '{category_value}' -> 'hourly_rate' as hourly_rate, image_url FROM teacher where schedule -> '{category_name}' is not NULL and schedule -> '{category_name}' -> '{category_value}' is not NULL limit {limit} offset {offset}"
    
    execute_query(query, curr)
    results = get_query_results(curr, is_multiple_reading = True)
    
    return Response(results)

@api_view(['POST'])
def read_teacher_metadata(request):
    params = request.data
    
    id = params['id']

    query = f"SELECT location, city, state, pin_code, about, qualification, achievement, class_mode, like_count, student_count, video_url FROM teacher where id = '{id}'"
    
    execute_query(query, curr)
    results = get_query_results(curr, is_multiple_reading = True)
    
    return Response(results)

@api_view(['POST'])
def read_teacher_reviews(request):
    params = request.data

    id = params['id']

    query = f"select reviews from teacher where id = '{id}'"

    execute_query(query, curr)
    results = get_query_results(curr)
    
    return Response(results)

@api_view(['POST'])
def read_teacher_schedules(request):
    def prepare_possible_schedule():
        timing = {
            "Sun": [],
            "Mon": [],
            "Tue": [],
            "Wed": [],
            "Thu": [],
            "Fri": [],
            "Sat": []
        }
        base = datetime.datetime.today()
        date_list = [base + datetime.timedelta(days=x) for x in range(30)]
        for date in date_list:
            day_name = date.strftime("%a")
            timing[day_name].append(str(date.date()))

        return timing

    params = request.data

    id = params['id']
    category_name = params['category_name']
    category_value = params['category_value']

    query = f"select schedule -> '{category_name}' -> '{category_value}' as schedule from teacher where id = '{id}'"

    execute_query(query, curr)
    results = get_query_results(curr)

    possible_schedule = prepare_possible_schedule()
    selected_schedule = results['schedule']
    
    available_schedule = []
    for day in selected_schedule.keys():
        if day in possible_schedule.keys():
            for time in selected_schedule[day]:
                for date in possible_schedule[day]:
                    available_schedule.append(date + 'T' + str(time) + ':00')
    
    return Response(available_schedule)


@api_view(['POST'])
def update_count(request):
    params = request.data

    table = params['table']
    id = params['id']
    column = params['column']
    type = params['type'] # values will be '+' or '-'

    query = "UPDATE {} SET {} = {} {} 1 where id = '{}'".format(table, column, column, type, id)
    
    execute_query(query, curr)

    return Response('ok')

@api_view(['POST'])
def send_otp(request):
    params = request.data

    phone = params['phone']
    type = params['type']

    generate_otp(phone, type)

    return Response('ok')

@api_view(['POST'])
def verify_otp(request):
    params = request.data

    phone = params['phone']
    otp = params['otp']
    type = params['type']

    validate_otp(phone, otp, type)

    return Response('ok')

@api_view(['POST'])
def send_sms(request):
    params = request.data

    destination_number = params['phone']
    message = params['message']
    type = params['type']

    send_message(destination_number, message, type)

    return Response('ok')

@csrf_exempt
@api_view(['GET'])
def generate_payment_order(request):
    params = request.data
    amount = 10000 #params['amount']
    currency = 'INR' #params['currency']
    callback_url = 'validate_payment_order/'
    context = generate_payment(amount, currency, callback_url)
    return render(request, 'index.html', context=context)

@csrf_exempt
@api_view(['POST'])
def validate_payment_order(request):
    status = validate_payment(request)
    return Response(status)

@api_view(['POST'])
def book_class(request):
    params = request.data

    data = params['data']

    duration = 60
    
    data['id'] = str(uuid.uuid4())
    data['is_active'] = 't'
    data['is_completed'] = 'f'
    data['is_rescheduled'] = 'f'
    data['is_cancelled'] = 'f'
    data['meeting_link'] = create_meeting(data['teacher_name'], data['student_name'], data['category_type'], data['category_value'], data['class_timestamp'], duration)[0]

    data['group_id'] = generate_id(data)

    columns = data.keys()
    values = data.values()
    
    query = "INSERT INTO {} ({}) VALUES {}".format('class', ', '.join(columns), tuple(values))
    
    execute_query(query, curr)
    
    return Response('ok')