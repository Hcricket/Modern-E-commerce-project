from django.urls import path
from .views import ViewCart, AddToCart, RemoveFromCart

urlpatterns = [
    path("", ViewCart.as_view(), name="cart"),          # /api/cart/
    path("add/", AddToCart.as_view(), name="cart-add"), # /api/cart/add/
    path("remove/", RemoveFromCart.as_view(), name="cart-remove"), # /api/cart/remove/
]


# The URLconf maps a URL path to that view.