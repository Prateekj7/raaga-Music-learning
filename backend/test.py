import requests
import json

def hello_world():
    res = requests.get("http://127.0.0.1:8000/hello_world/")
    print(res.status_code)


if __name__ == "__main__":
    headers = {'Content-type': 'application/json'}
    # hello_world()


    # data = {
    #     "table": "teacher",
    #     "data": {
    #         "name": "MKS",
    #         "contact_number": "+91123456789",
    #         "email_id": "qwerb@gmail.com",
    #         "gender": "M"
    #     }
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/insert_data/', data=data, headers=headers)
    # print(res, json.loads(res.content))


    # data = {
    #     "table": "teacher",
    #     "page_size": 10,
    #     "page_number": 1,
    #     "columns": ['name', 'location'],
    #     "id": '1'
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/read_data/', data=data, headers=headers)
    # print(res, json.loads(res.content))

    # data = {
    #     "page_size": 10,
    #     "page_number": 1,
    #     "category_name": "vocal",
    #     "category_value": 'indian_classical'
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/read_teacher_main_data/', data=data, headers=headers)
    # print(res, json.loads(res.content))

    # data = {
    #     "id": "1",
    #     "category_name": "vocal",
    #     "category_value": 'indian_classical'
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/read_teacher_metadata/', data=data, headers=headers)
    # print(res, json.loads(res.content))

    # data = {
    #     "id": "1"
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/read_teacher_reviews/', data=data, headers=headers)
    # print(res, json.loads(res.content))

    # data = {
    #     "id": "1",
    #     "category_name": "vocal",
    #     "category_value": 'indian_classical'
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/read_teacher_schedules/', data=data, headers=headers)
    # print(res, json.loads(res.content))

    # data = {
    #     'amount': 5000, 
    #     'currency': 'INR'
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/generate_payment_order/', data=data, headers=headers)
    # print(res, json.loads(res.content))

    # data = {
    #     'data':{
    #         "student_id": 1,
    #         "student_name": "Anish Kumar",
    #         "teacher_id": 1,
    #         "teacher_name": "Mohan Kumar",
    #         "category_type": "Vocal",
    #         "category_value": 'Indian Classical',
    #         "class_timestamp": "2022-10-30T11:00",
    #         "payment_id": 1,
    #         "payment_amount": 1000,
    #         "payment_timestamp": "2022-10-30T11:00"
    #     }
        
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/book_class/', data=data, headers=headers)
    # print(res, json.loads(res.content))

    data = {
        'phone': "+919876543210"
        
    }
    data = json.dumps(data)
    res = requests.post('http://127.0.0.1:8000/check_user_existance/', data=data, headers=headers)
    print(res, json.loads(res.content))