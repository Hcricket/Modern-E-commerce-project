import stripe
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from cart_app.models import Cart,CartItem
from cart_app.serializers import CartSerializer

stripe.api_key = settings.STRIPE_SECRET_KEY

class PaymentIntentView(APIView):
    def post(self, request):
        print("payment success")
        try:
            cart,created = Cart.objects.get_or_create(user=request.user, is_active=True)
            cart = CartSerializer(cart)
            print("Cart",cart.data["items"])
            # amount = 1000
            amount= int(sum([item["product_price"] * item["quantity"] for item in cart.data["items"]]) * 100)
            if amount <= 0:
                    return Response({"error":"cart is empty"},status = 400)

            intent = stripe.PaymentIntent.create(
                amount = amount,
               
                currency="usd",
                payment_method_types=["card"],
                
            )
            # print("hello hello")
            return Response({"client_secret": intent.client_secret})
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
