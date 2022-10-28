import razorpay
# from django.conf import settings

# authorize razorpay client with API Keys.
# razorpay_client = razorpay.Client(auth=(rzp_test_2s9Z2vGnwGlVwM, settings.RAZOR_KEY_SECRET))

key_id = "rzp_test_2s9Z2vGnwGlVwM"
key_secret = "RmPYh29Ruugo6lJdatNf2Bi9"
razorpay_client = razorpay.Client(auth=(key_id, key_secret))

def generate_payment(amount, currency, callback_url):
    # Create a Razorpay Order
    razorpay_order = razorpay_client.order.create(dict(amount=amount, currency=currency, payment_capture='0'))
 
    # order id of newly created order.
    razorpay_order_id = razorpay_order['id']
    
    # we need to pass these details to frontend.
    context = {}
    context['razorpay_order_id'] = razorpay_order_id
    context['razorpay_merchant_key'] = key_id # settings.RAZOR_KEY_ID
    context['razorpay_amount'] = amount
    context['currency'] = currency
    context['callback_url'] = callback_url
 
    return context


def validate_payment(request):
    try:
        # get the required parameters from post request.
        payment_id = request.POST.get('razorpay_payment_id', '')
        razorpay_order_id = request.POST.get('razorpay_order_id', '')
        signature = request.POST.get('razorpay_signature', '')
        amount = request.POST.get('razorpay_amount', '')
        params_dict = {
            'razorpay_order_id': razorpay_order_id,
            'razorpay_payment_id': payment_id,
            'razorpay_signature': signature
        }

        # verify the payment signature.
        result = razorpay_client.utility.verify_payment_signature(params_dict)

        if result is not None:
            try:

                # capture the payemt
                razorpay_client.payment.capture(payment_id, amount)

                # render success page on successful caputre of payment
                return "success"
            except:

                # if there is an error while capturing payment.
                return "payment_failed"
        else:

            # if signature verification fails.
            return "verification_failed"
    except:

        # if we don't find the required parameters in POST data
        return "bad_request"

if __name__ == "__main__":
    amount = 20000  # Rs. 200
    currency = "INR"
    callback_url = 'validate_payment_order/'
    context = generate_payment(amount, currency, callback_url)
    print(context)