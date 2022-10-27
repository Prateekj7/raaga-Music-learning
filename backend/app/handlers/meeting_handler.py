import jwt
import requests
import json
from time import time
  
  
# Enter your API key and your API secret
API_KEY = 'ky9g2lOMQXuMA_p9FB-q3A'
API_SEC = 'OXnZkQslyNSrxbWZQG5LzOmgVs0f1Ff9flUh'
  
# create a function to generate a token
# using the pyjwt library
  
  
def generateToken():
    token = jwt.encode(
  
        # Create a payload of the token containing
        # API Key & expiration time
        {'iss': API_KEY, 'exp': time() + 5000},
  
        # Secret used to generate token signature
        API_SEC,
  
        # Specify the hashing alg
        algorithm='HS256'
    )
    return token
  
  
def create_meeting(teacher, student, category_type, category_value, timestamp, duration):
    
    headers = {
        'authorization': 'Bearer ' + generateToken(),
        'content-type': 'application/json'
    }

    # create json data for post requests
    meetingdetails = {
        "topic": f"{teacher} class with {student} for {category_value} ({category_type})",
        "type": 2,
        "start_time": timestamp,
        "duration": duration,
        "timezone": "Asia/Kolkata",
        "agenda": "class",
        "recurrence": {
            "type": 1,
            "repeat_interval": 1
        },
        "settings": {
            "host_video": "true",
            "participant_video": "true",
            "join_before_host": "True",
            "mute_upon_entry": "False",
            "watermark": "true",
            "audio": "voip",
            "auto_recording": "False"
        }
    }

    # send a request with headers including
    # a token and meeting details
    r = requests.post(f'https://api.zoom.us/v2/users/me/meetings', headers=headers, data=json.dumps(meetingdetails))
  
    print("\n creating zoom meeting ... \n")
    # print(r.text)
    # converting the output into json and extracting the details
    y = json.loads(r.text)
    join_URL = y["join_url"]
    meetingPassword = y["password"]

    return join_URL, meetingPassword
  
if __name__ == '__main__':
    # run the create meeting function
    teacher = "Mohan"
    student = "Anish"
    category_type = "violin"
    category_value = "Indian Classical"
    duration = 45 # minutes
    timestamp = "2022-10-26T20:00"
    join_URL, meetingPassword = create_meeting(teacher, student, category_type, category_value, timestamp, duration)

    print(f'\n here is your zoom meeting link {join_URL} and your password: "{meetingPassword}"\n')