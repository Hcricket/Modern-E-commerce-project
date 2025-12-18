from django.db import models #acess to all field types and base Model
from django.conf import settings #reference the user model with settings.AUTH_USER_MODEL
from product_app.models import Product #connect cart items to products
# Create your models here.

class Cart(models.Model):
  user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name="carts")
                #cart<-> user         delete user/cart       all carts of a user ->user.carts.all()
  is_active = models.BooleanField(default=True) 
  #cart `activate(True)` `inactive(False)`
  created_at = models.DateTimeField(auto_now=True)
  #automatically updates


class CartItem(models.Model):
  cart = models.ForeignKey(Cart,on_delete=models.CASCADE,related_name="items")
  product = models.ForeignKey(Product,on_delete=models.CASCADE)
  quantity = models.PositiveIntegerField(default=1)
                    #Must be positive(no negatives)

#inner class
  class Meta:     
      unique_together = ("cart", "product")

  # class Meta:
  #   constraints = [
  #       models.UniqueConstraint(fields=["cart", "product"], name="unique_cart_product")
  #   ]


# Metadata can control things like:

# Table name (db_table)

# Ordering (ordering)

# Constraints (unique_together, indexes)

# Permissions (permissions)
    

#     dummydata
# cart = Cart.objects.create(user=u1)
# CartItem.objects.create(cart=cart, product=p1, quantity=2)
# CartItem.objects.create(cart=cart, product=p2, quantity=1)