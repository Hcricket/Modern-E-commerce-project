import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from rest_framework.permissions import AllowAny


class WeatherView(APIView):
    permission_classes =[AllowAny]
    def post(self, request):
        city = request.data.get("city")
        api_key = settings.WEATHER_API_KEY

        url = "https://api.weatherapi.com/v1/current.json"
        resp = requests.get(url, params={"key": api_key, "q": city})

        if resp.status_code == 200:
            data = resp.json()
            return Response({
                "city": data["location"]["name"],
                "temperature": data["current"]["temp_c"],
                "condition": data["current"]["condition"]["text"]
            })
        else:
            return Response({"error": "Failed to fetch weather"}, status=status.HTTP_400_BAD_REQUEST)
