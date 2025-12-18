import stripe
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

stripe.api_key = settings.STRIPE_SECRET_KEY

class PaymentIntentView(APIView):
    def post(self, request):
        try:
            intent = stripe.PaymentIntent.create(
                amount=1000,  # $10.00 in cents
                currency="usd",
                payment_method_types=["card"],
            )
            return Response({"client_secret": intent.client_secret})
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
