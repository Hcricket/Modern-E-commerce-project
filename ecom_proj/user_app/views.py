from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated,AllowAny

#from rest_framework import generics #generic class-based views/provide ready-made views like CreateAPIView,ListAPIView,etc
# Create your views here.


# View → uses serializer to handle requests.
class RegisterView(APIView):
    permission_classes = [AllowAny]
    def post(self,request):
      serializer = RegisterSerializer(data=request.data)
      if serializer.is_valid():
        user = serializer.save()
        return Response({"Message":"User has been Created","username":user.username},status=status.HTTP_201_CREATED)
      return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


# DRF TokenAuthentication → simple, DB‑stored, good for small apps.

# JWT (SimpleJWT) → stateless, modern, best for React/mobile.

# OAuth2 → for external integrations or enterprise apps.

# Custom tokens → when you need special rules.
class LoginView(APIView):
    permission_classes = [AllowAny]   

    def post(self, request):
        user = authenticate(
            username=request.data.get("username"),
            password=request.data.get("password")
        )
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({"token": token.key})
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        request.user.auth_token.delete()
        return Response({"detail": "Logged out"}, status=status.HTTP_204_NO_CONTENT)


class InfoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({
            "id": user.id,
            "username": user.username,
            "email": user.email
        })