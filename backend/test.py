import requests
import json

def hello_world():
    res = requests.get("http://127.0.0.1:8000/api/hello_world/")
    print(res.status_code)


if __name__ == "__main__":
    headers = {'Content-type': 'application/json'}
    # hello_world()


    # data = {
    #     "table": "teacher",
    #     "data": {
    #         "name": "Mohan Kumar Sah",
    #         "contact_number": "+91123456789",
    #         "email_id": "qwerb@gmail.com",
    #         "gender": "M"
    #     }
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/api/insert_data/', data=data, headers=headers)
    # print(res, json.loads(res.content))

    # data = {
    #     "table": "teacher",
    #     "columns": ["schedule"],
    #     "id_column_name": "id",
    #     "id_column_value": "f6b8f76c-7c19-4adf-89fe-f635127b48dd"
    # }
    # # data = json.dumps(data)
    # res = requests.get('http://127.0.0.1:8000/api/read_data?table=teacher&columns=["schedule"]&id_column_name=id&id_column_value=f6b8f76c-7c19-4adf-89fe-f635127b48dd', headers=headers)
    # print(res, json.loads(res.content))

    # data = {
    #     "page_size": 10,
    #     "page_number": 1,
    #     "category_name": "vocal",
    #     "category_value": 'indian_classical'
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/api/read_teacher_main_data/', data=data, headers=headers)
    # print(res, json.loads(res.content))

    # data = {
    #     "id": "65469eff-157a-4be1-b914-af677773a152",
    #     "category_name": "vocal",
    #     "category_value": 'indian_classical'
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/api/read_teacher_metadata/', data=data, headers=headers)
    # print(res, json.loads(res.content))

    # data = {
    #     "id": "11943187-79b1-41f7-9534-4a967b7007ca"
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/api/read_teacher_reviews/', data=data, headers=headers)
    # print(res, json.loads(res.content))

    # data = {
    #     "id": "f6b8f76c-7c19-4adf-89fe-f635127b48dd"
    # }
    # data = json.dumps(data)
    # res = requests.get('http://127.0.0.1:8000/api/read_teacher_raw_schedule/?id=554077d7-ee48-4676-b457-37f0488ba969', headers=headers)
    # print(res, json.loads(res.content))

    data = {
        "id": "5bf1502c-3859-4a7d-b338-57fc9b2ee025",
        "schedule": {
                    "instrumental": {
                        "Guitar": {
                            "class_details": {
                                "class_mode": "Both",
                                "hourly_rate": 200
                            },
                            "class_timings": {
                                "Fri": [8, 21],
                                "Mon": [8, 21],
                                "Sat": [8, 21],
                                "Thu": [8, 21],
                                "Tue": [8, 21],
                                "Wed": [8, 21]
                            }
                        }
                    }
                }
        
    }
    data = json.dumps(data)
    res = requests.post('http://127.0.0.1:8000/api/update_teacher_raw_schedule/', data=data, headers=headers)
    print(res, json.loads(res.content))
    
    # data = {
    #     "id": "f6b8f76c-7c19-4adf-89fe-f635127b48dd",
    #     "category_name": "vocal",
    #     "category_value": 'Indian Classical'
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/api/read_teacher_schedules/', data=data, headers=headers)
    # print(res, json.loads(res.content))

    # data = {
    #     'amount': 5000, 
    #     'currency': 'INR'
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/api/generate_payment_order/', data=data, headers=headers)
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
    # res = requests.post('http://127.0.0.1:8000/api/book_class/', data=data, headers=headers)
    # print(res, json.loads(res.content))

    # data = {
    #     'email_id': "contact@mayoorschoolofmusic.com"   
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/api/check_user_existance/', data=data, headers=headers)
    # print(res, json.loads(res.content))


    # res = requests.get('http://127.0.0.1:8000/api/get_csrf_token/', headers=headers)
    # print(res, json.loads(res.content))    