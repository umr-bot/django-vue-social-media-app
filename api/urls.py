from django.urls import path
from django.conf.urls import include 
from rest_framework import routers
from .views import UserViewSet, PostViewSet, ProfileViewSet

router = routers.DefaultRouter()
router.register(r'User',UserViewSet)
router.register(r'Post',PostViewSet)
router.register(r'Profile', ProfileViewSet )


urlpatterns = [
    path('',include(router.urls))
]
