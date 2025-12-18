from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  email =models.EmailField(unique=True)

  def __str__(self):      #__str__ ->objects can show-meaningful string
    return self.username
# Create your models here.


# dummydata
#  u1 = User.objects.create_user(username="hein", email="hein@example.com", password="test123")