from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Cart,CartItem
from product_app.models import Product
from .serializers import CartSerializer,CartItemSerializer
from rest_framework.decorators import APIView

# Create your views here.
class ViewCart(APIView):
  permission_classes = [IsAuthenticated]

  def get(self,request):
    #GET/api/cart(active cart)
      cart,created= Cart.objects.get_or_create(user=request.user, is_active=True)
      serializer = CartSerializer(cart)
      return Response(serializer.data)

class AddToCart(APIView):
  permission_classes =[IsAuthenticated]

  def post(self,request):
    #POST/api/cart/add-product to cart
    cart,created = Cart.objects.get_or_create(user=request.user,is_active=True)
    product_id = request.data.get("product")
    quantity = int(request.data.get("quantity",1))

    try:
      product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
      return Response({"error":"Product not found"},status=status.HTTP_404_NOT_FOUND)


    cart_item, created = CartItem.objects.get_or_create(
    cart=cart,
    product=product,
    defaults={'quantity': quantity}
)

    if not created:
        cart_item.quantity += quantity
        cart_item.save()
   
    return Response(CartItemSerializer(cart_item).data, status=status.HTTP_201_CREATED)

class RemoveFromCart(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self,request):
      #Delete/api/cart/remove/product from cart
      cart,created = Cart.objects.get_or_create(user=request.user,is_active=True)
      product_id = request.data.get("product")


      try:
        cart_item = CartItem.objects.get(cart=cart, product_id=product_id)
        cart_item.delete()
        return Response({"detail": "Item removed"}, status=status.HTTP_204_NO_CONTENT)
      except CartItem.DoesNotExist:
        return Response({"error":"Item not found in cart"},status=status.HTTP_404_NOT_FOUND)
