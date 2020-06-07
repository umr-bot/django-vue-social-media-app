"""project3 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path
from django.conf.urls import include, url
from rest_framework.authtoken.views import obtain_auth_token
from django.views.decorators.csrf import csrf_exempt
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls') ),
    path(r'auth/',obtain_auth_token),
    path('api-login/',include('rest_framework.urls') ),
    # JWT auth
    url(r'^api/v1/auth/obtain_token/', obtain_jwt_token),
    url(r'^api/v1/auth/refresh_token/', refresh_jwt_token),
    # The rest of the endpoints
    #url(r'^api/v1/', include('project3.urls', namespace='apiv1')),
    url(r'^api-token-verify/', verify_jwt_token)
]
