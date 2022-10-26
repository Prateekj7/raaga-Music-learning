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
import json
import hashlib

conn = psycopg2.connect(
    host="localhost",
    database="raaga",
    user="postgres",
    password="raaga",
    port="5432"
    )

# conn = psycopg2.connect(
#     host="raaga-db.c8yxdpnzikil.us-east-1.rds.amazonaws.com",
#     database="raaga-db",
#     user="postgres",
#     password="raaga_apnito_test_db",
#     port="5432"
#     )

# create a cursor
curr = conn.cursor()

def generate_id(inserted_data_dict):
    ref_data = str(inserted_data_dict)
    return hashlib.md5(ref_data.encode()).hexdigest()

@api_view(['GET'])
def foo(request):
    print(request.data)
    return HttpResponse("Hello World!")

@api_view(['POST'])
def insert_data(request):
    params = request.data

    table = params['table']
    data = params['data']

    columns = data[0].keys()
    
    query = "INSERT INTO {} ({}) VALUES %s".format(table, ', '.join(columns))
    
    # convert projects values to sequence of seqeences
    values = [[value for value in entry.values()] for entry in data]
    
    curr.execute("ROLLBACK")
    execute_values(curr, query, values)
    
    return Response('ok')

@api_view(['POST'])
def read_data(request):
    params = request.data

    table = params['table']
    limit = params['page_size']
    offset = (params['page_number'] - 1) * limit

    query = "SELECT * FROM {} limit {} offset {}".format(table, limit, offset)
    
    curr.execute("ROLLBACK")
    curr.execute(query)
    
    rows = curr.fetchall()

    df = pd.DataFrame(rows)
    if len(rows) > 0:
        df.columns = [entry[0] for entry in curr.description]
    
    return Response(df.to_dict('records'))

@api_view(['POST'])
def update_count(request):
    params = request.data

    table = params['table']
    id = params['id']
    column = params['column']
    type = params['type'] # values will be '+' or '-'

    query = "UPDATE {} SET {} = {} {} 1 where id = {}".format(table, column, column, type, id)
    
    curr.execute("ROLLBACK")
    curr.execute(query)

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

@api_view(['POST'])
def generate_payment_order(request):
    params = request.data
    amount = params['amount']
    currency = params['currency']
    callback_url = 'validate_payment_order/'
    context = generate_payment(amount, currency, callback_url)
    return Response(context)

@api_view(['POST'])
def validate_payment_order(request):
    status = validate_payment(request)
    return Response(status)