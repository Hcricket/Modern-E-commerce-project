from django.db import models

# Create your models here.
class ItemCategory(models.Model):
    name = models.CharField(max_length=100)
    #ItemCategory = groups products(Men,Women,Accessories)

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    brand = models.CharField(max_length=100)
    color = models.CharField(max_length=50)
    size = models.CharField(max_length=50)
    image_url = models.URLField()
    stock = models.IntegerField()
#ForeignKey =connects products to categories,ensuring relational integrity
    category = models.ForeignKey(ItemCategory, on_delete=models.CASCADE)
    

# ItemCategory = groups products (Men, Women, Accessories).

# Product = actual items with details (name, price, brand, color, size, stock, image).

# ForeignKey = connects products to categories, ensuring relational integrity.
