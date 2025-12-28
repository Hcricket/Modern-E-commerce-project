from rest_framework import serializers
from .models import Cart, CartItem
from product_app.models import Product

class CartItemSerializer(serializers.ModelSerializer):
    product_name = serializers.ReadOnlyField(source="product.name")
    product_price = serializers.ReadOnlyField(source="product.price")
    product_image = serializers.ReadOnlyField(source="product.image_url")


    class Meta:
        model = CartItem
        fields = ["id", "product", "product_name", "product_price","product_image", "quantity"]

class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ["id", "user", "is_active", "created_at", "items"]
        read_only_fields = ["user", "created_at"]
