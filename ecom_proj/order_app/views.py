from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.http import Http404
from .models import Order, OrderItem
from .serializers import OrderSerializer, OrderItemSerializer

class OrderList(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        orders = Order.objects.filter(user=request.user)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderDetail(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get_object(self, pk, user):
        try:
            return Order.objects.get(pk=pk, user=user)
        except Order.DoesNotExist:
            raise Http404
    
    def get(self, request, pk):
        order = self.get_object(pk, request.user)
        serializer = OrderSerializer(order)
        return Response(serializer.data)
    
    def put(self, request, pk):
        order = self.get_object(pk, request.user)
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, pk):
        order = self.get_object(pk, request.user)
        serializer = OrderSerializer(order, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        order = self.get_object(pk, request.user)
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class OrderItemList(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        order_items = OrderItem.objects.filter(order__user=request.user)
        serializer = OrderItemSerializer(order_items, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = OrderItemSerializer(data=request.data)
        if serializer.is_valid():
            # Validate order ownership
            order = serializer.validated_data.get('order')
            if order.user != request.user:
                return Response({"error": "You don't own this order"}, 
                              status=status.HTTP_403_FORBIDDEN)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class OrderItemDetail(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get_object(self, pk, user):
        try:
            return OrderItem.objects.get(pk=pk, order__user=user)
        except OrderItem.DoesNotExist:
            raise Http404
    
    def get(self, request, pk):
        order_item = self.get_object(pk, request.user)
        serializer = OrderItemSerializer(order_item)
        return Response(serializer.data)
    
    def put(self, request, pk):
        order_item = self.get_object(pk, request.user)
        serializer = OrderItemSerializer(order_item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request, pk):
        order_item = self.get_object(pk, request.user)
        serializer = OrderItemSerializer(order_item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        order_item = self.get_object(pk, request.user)
        order_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



























# from rest_framework import viewsets, permissions
# from .models import Order, OrderItem
# from .serializers import OrderSerializer, OrderItemSerializer

# class OrderViewSet(viewsets.ModelViewSet):
#     serializer_class = OrderSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         # Only return orders belonging to the logged-in user
#         return Order.objects.filter(user=self.request.user)

#     def perform_create(self, serializer):
#         # Automatically set the user when creating an order
#         serializer.save(user=self.request.user)


# class OrderItemViewSet(viewsets.ModelViewSet):
#     serializer_class = OrderItemSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         # Only return items belonging to the logged-in user's orders
#         return OrderItem.objects.filter(order__user=self.request.user)
