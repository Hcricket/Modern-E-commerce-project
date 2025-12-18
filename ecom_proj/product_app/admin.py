
from django.contrib import admin
from .models import Product, ItemCategory




# Register your models here.
@admin.register(ItemCategory)
class CategoryAdmin(admin.ModelAdmin):
  list_display = ("name",)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
  list_display = ("name","price","stock","category","brand")
  search_fields = ("name","brand")
  list_filter =("category","brand")