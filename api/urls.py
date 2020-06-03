from django.urls import path
from django.conf.urls import include 
from rest_framework import routers
from .views import UserViewSet, PostViewSet

router = routers.DefaultRouter()
router.register('Register',UserViewSet)
router.register('Post',PostViewSet)

urlpatterns = [
    path('',include(router.urls))
]
