from django.urls import path
from .views import (
    ItemCategoryList, ItemCategoryDetail,
    ProductList, ProductDetail
)

urlpatterns = [
    # # Categories
    path('categories/', ItemCategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', ItemCategoryDetail.as_view(), name='category-detail'),

    # Products
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
]

























# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import ItemCategoryViewSet, ProductViewSet

# router = DefaultRouter()
# router.register(r'categories', ItemCategoryViewSet)
# router.register(r'products', ProductViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]
