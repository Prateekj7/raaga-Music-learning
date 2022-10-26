import logging
import boto3
from botocore.exceptions import ClientError

logger = logging.getLogger(__name__)

region =  "us-east-1"
app_id = "ce796be37f32f178af652b26eexample"
origination_number = "+12065550199"
# message = (
#     "This is a sample message sent from Amazon Pinpoint by using the AWS SDK for "
#     "Python (Boto 3).")
# message_type = "TRANSACTIONAL"
# template_name = "My_SMS_Template"
# template_version = "1"


pinpoint_client = boto3.client('pinpoint', region_name=region)

def send_message(destination_number, message, message_type):
    """
    Sends an SMS message with Amazon Pinpoint.

    :pinpoint_client: A Boto3 Pinpoint client.
    :app_id: The Amazon Pinpoint project/application ID to use when you send
                   this message. The SMS channel must be enabled for the project or
                   application.
    :destination_number: The recipient's phone number in E.164 format.
    :origination_number: The phone number to send the message from. This phone
                               number must be associated with your Amazon Pinpoint
                               account and be in E.164 format.
    :message: The content of the SMS message.
    :message_type: The type of SMS message that you want to send. If you send
                         time-sensitive content, specify TRANSACTIONAL. If you send
                         marketing-related content, specify PROMOTIONAL.
    :return: The ID of the message.
    """
    try:
        response = pinpoint_client.send_messages(
            ApplicationId=app_id,
            MessageRequest={
                'Addresses': {
                    destination_number: {
                        'ChannelType': 'SMS'
                    }
                },
                'MessageConfiguration': {
                    'SMSMessage': {
                        'Body': message,
                        'MessageType': message_type,
                        'OriginationNumber': origination_number
                    }
                }
            }
        )
    except ClientError:
        logger.exception("Couldn't send message.")
        raise
    else:
        return response['MessageResponse']['Result'][destination_number]['MessageId']


def send_templated_message(destination_number, message_type, template_name, template_version):
    """
    Sends an SMS message to a specific phone number using a pre-defined template.

    :pinpoint_client: A Boto3 Pinpoint client.
    :app_id: An Amazon Pinpoint project (application) ID.
    :destination_number: The phone number to send the message to.
    :message_type: The type of SMS message (promotional or transactional).
    :origination_number: The phone number that the message is sent from.
    :template_name: The name of the SMS template to use when sending the message.
    :template_version: The version number of the message template.

    :return The ID of the message.
    """
    try:
        response = pinpoint_client.send_messages(
            ApplicationId=app_id,
            MessageRequest={
                'Addresses': {
                    destination_number: {
                        'ChannelType': 'SMS'
                    }
                },
                'MessageConfiguration': {
                    'SMSMessage': {
                        'MessageType': message_type,
                        'OriginationNumber': origination_number
                    }
                },
                'TemplateConfiguration': {
                    'SMSTemplate': {
                        'Name': template_name,
                        'Version': template_version
                    }
                }
            }
        )

    except ClientError:
        logger.exception("Couldn't send message.")
        raise
    else:
        return response['MessageResponse']['Result'][destination_number]['MessageId']


if __name__ == '__main__':
    destination_number = "+14255550142"
    message = ("This is a sample message sent from Amazon Pinpoint by using the AWS SDK for Python (Boto 3).")
    message_type = "TRANSACTIONAL"
    message_id = send_message(destination_number, message, message_type)