from rest_framework import serializers
from .models import ItemCategory, Product

class ItemCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemCategory
        fields = ['id', 'name']
        #id,name fields ->JSON Output

class ProductSerializer(serializers.ModelSerializer):
    category = ItemCategorySerializer(read_only=True) #nested  (create custom field ---reading/returning (GET requests)only)
    category_id = serializers.PrimaryKeyRelatedField(  #This field accept only the (id) of a category
        queryset=ItemCategory.objects.all(),  #come from all in the db
        source='category',     #category_id = product of category
        write_only=True  #POST/PUT only
    ) 

   
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description', 'price',
            'brand', 'color', 'size', 'image_url',
            'stock', 'category', 'category_id'
        ]
#'__all__' will return everything,might duplicate(nested serializer)