from rest_framework import serializers #API-JSON->Python object
from .models import User


# Serializer → links model fields to JSON input/output.

class RegisterSerializer(serializers.ModelSerializer):
      #inherits from Modelserializer
  password = serializers.CharField(write_only=True)
                                    #send it to the API,API will not return(for security)
  class Meta:  #Meta tells the seializer which model and which fields to use.
      model = User
      fields = ["username","email","password"] #Only accept these fields


  def create(self,validated_data):
      user = User.objects.create_user(
                         #built in create_user()-password hashing/user creation logic
          username = validated_data["username"],
          email = validated_data["email"],
          password = validated_data["password"]
      )
      return user



      #Validator
      '''Make sure the data is valid

      Prevent bad or incorrect data

      Raise an error if something is wrong

      Protect your database from invalid input'''