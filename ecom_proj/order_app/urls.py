from django.urls import path
from .views import (
    OrderList, OrderDetail,
    OrderItemList, OrderItemDetail
)

urlpatterns = [
    # Orders
    path('orders/', OrderList.as_view(), name='order-list'),
    path('orders/<int:pk>/', OrderDetail.as_view(), name='order-detail'),

    # Order Items
    path('order-items/', OrderItemList.as_view(), name='orderitem-list'),
    path('order-items/<int:pk>/', OrderItemDetail.as_view(), name='orderitem-detail'),
]


































#from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import OrderViewSet, OrderItemViewSet

# router = DefaultRouter()
# router.register(r'orders', OrderViewSet, basename='orders')
# router.register(r'order-items', OrderItemViewSet, basename='order-items')

# urlpatterns = [
#     path('', include(router.urls)),
# ]
