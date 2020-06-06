from django.urls import path
from django.conf.urls import include 
from rest_framework import routers
from .views import UserViewSet, PostViewSet
from django.views.decorators.csrf import csrf_exempt

router = routers.DefaultRouter()
router.register(r'Register',UserViewSet, basename='User')
router.register(r'Post',PostViewSet)
#router.register(r'Register_view',Register_view)
urlpatterns = [
    path('',include(router.urls))
]
