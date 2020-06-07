from django.urls import path
from django.conf.urls import include 
from rest_framework import routers
from .views import UserViewSet, PostViewSet, ProfileViewSet

router = routers.DefaultRouter()
router.register('User',UserViewSet)
router.register('Post',PostViewSet)
router.register('Profile', ProfileViewSet )


urlpatterns = [
    path('',include(router.urls))
]
