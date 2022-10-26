import requests
import json

def hello_world():
    res = requests.get("http://127.0.0.1:8000/hello_world/")
    print(res.status_code)


if __name__ == "__main__":
    headers = {'Content-type': 'application/json'}
    # hello_world()


    # data = {
    #     "table": "appraaga_student",
    #     "data": [{
    #         "name": "MKS",
    #         "city": "Madhubani",
    #         "state": "Bihar",
    #         "pin_code": 847226,
    #         "about": "A student of Apnito",
    #         "qualification": "12 th",
    #         "contact_no": "123456789",
    #         "email_id": "qwerb@gmail.com"
    #     }]
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

    data = {
        "id": "1",
        "category_name": "vocal",
        "category_value": 'indian_classical'
    }
    data = json.dumps(data)
    res = requests.post('http://127.0.0.1:8000/read_teacher_schedules/', data=data, headers=headers)
    print(res, json.loads(res.content))

    # data = {
    #     'amount': 5000, 
    #     'currency': 'INR'
    # }
    # data = json.dumps(data)
    # res = requests.post('http://127.0.0.1:8000/generate_payment_order/', data=data, headers=headers)
    # print(res, json.loads(res.content))