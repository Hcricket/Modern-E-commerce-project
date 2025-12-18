from django.db import models
from django.conf import settings #AUTH_USER_MODEL
from product_app.models import Product


# Create your models here.
class Order(models.Model):
  user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name="orders")
                            #User=settings.AUTH_USER_MODEL for new field,flex,consistency,future-proof
  status = models.CharField(max_length=20,default="Pending") #stores the order status Pending,Paid,Shipped,Completed
  total_price = models.DecimalField(max_digits=10,decimal_places=2,default=0)
  stripe_payment_intent = models.CharField(max_length=255,blank=True)
  created_at = models.DateTimeField(auto_now_add=True)


class OrderItem(models.Model): #each product in an order is represented here
  order = models.ForeignKey(Order,on_delete=models.CASCADE,related_name="items")
  product = models.ForeignKey(Product,on_delete=models.PROTECT)
                                      #prevents deleting if already part of an order
  quantity = models.PositiveIntegerField(default=1)
  price = models.DecimalField(max_digits=10,decimal_places=2)




# dummydata

#   # >>> order = Order.objects.create(user=u1,status="Pending",total_price=1500.99)
# >>> OrderItem.objects.create(order=order,product=p1,quantity=2,price=799.89)
# <OrderItem: OrderItem object (1)>
# >>> OrderItem.objects.create(order=order,product=p2,quantity=1,price=20.79)
# <OrderItem: OrderItem object (2)>