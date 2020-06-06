from django.urls import path
from django.conf.urls import include 
from rest_framework import routers
from .views import UserViewSet, PostViewSet, ProfileViewSet

router = routers.DefaultRouter()
router.register(r'Register',UserViewSet, basename='User')
router.register(r'Post',PostViewSet)
router.register(r'Login', ProfileViewSet )


urlpatterns = [
    path('',include(router.urls))
]
