from rest_framework import serializers
from .models import Order, OrderItem
from product_app.serializers import ProductSerializer  # reuse product serializer

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)  # nested product details
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=OrderItem._meta.get_field('product').remote_field.model.objects.all(),
        source='product',
        write_only=True
    )

    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'product', 'product_id', 'quantity', 'price']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)  # nested items
    user = serializers.StringRelatedField(read_only=True)   # show username/email

    class Meta:
        model = Order
        fields = [
            'id', 'user', 'status', 'total_price',
            'stripe_payment_intent', 'created_at', 'items'
        ]
