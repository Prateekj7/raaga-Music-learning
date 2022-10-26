import hashlib
import boto3
from botocore.exceptions import ClientError
 
def generate_ref_id(destinationNumber, brandName, source):
    refId = brandName + source + destinationNumber
    return hashlib.md5(refId.encode()).hexdigest()


# The AWS Region that you want to use to send the message.
region = "us-east-1"

# The phone number or short code to send the message from.
originationNumber = "+18555550142"

# The project/application ID to use when you send the message.
appId = "7353f53e6885409fa32d07cedexample"

# The number of times the user can unsuccessfully enter the OTP code before it becomes invalid.
allowedAttempts = 3

# Message will include the brand name "RaagaMedia"
brandName = "RaagaMedia"

# Function that sends the OTP as an SMS message.
def generate_otp(destinationNumber, brandName, source):
    client = boto3.client('pinpoint',region_name=region)
    try:
        response = client.send_otp_message(
            ApplicationId=appId,
            SendOTPMessageRequestParameters={
                'Channel': 'SMS',
                'BrandName': brandName,
                'CodeLength': 6, # 6-digit OTP
                'ValidityPeriod': 15, # OTP will valid for 15 minutes
                'AllowedAttempts': allowedAttempts,
                'Language': "en-US", # US English message template should be used to send the message
                'OriginationIdentity': originationNumber,
                'DestinationIdentity': destinationNumber,
                'ReferenceId': generate_ref_id(destinationNumber, brandName, source)
            }
        )

    except ClientError as e:
        print(e.response)
    else:
        print(response)


# Function that verifies the OTP code.
def validate_otp(destinationNumber, otp, source):
    client = boto3.client('pinpoint',region_name=region)
    try:
        response = client.verify_otp_message(
            ApplicationId=appId,
            VerifyOTPMessageRequestParameters={
                'DestinationIdentity': destinationNumber,
                'ReferenceId': generate_ref_id(destinationNumber,brandName,source),
                'Otp': otp
            }
        )

    except ClientError as e:
        print(e.response)
    else:
        print(response)

if __name__ == "__main__":
    # Send a message to +14255550142 that contains a 6-digit OTP that is valid for 15 minutes. The
    # message will include the brand name "ExampleCorp", and the request originated from a part of your
    # site or application called "CreateAccount". The US English message template should be used to
    # send the message.
    generate_otp("+14255550142", "CreateAccount")

    # Verify the OTP 012345, which was sent to +14255550142. The brand name ("ExampleCorp") and the
    # source name ("CreateAccount") are used to generate the correct reference ID.
    validate_otp("+14255550142", "012345", "CreateAccount")