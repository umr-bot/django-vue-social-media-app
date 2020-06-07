from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated,AllowAny
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from .serializers import UserSerializer, PostSerializer, ProfileSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework import viewsets, status
from .models import Post, Profile
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer 
    permission_classes = (AllowAny, )

    @action(detail=True)
    def get_queryset(self):
        queryset = User.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = queryset.filter(username = username)
        return queryset
            

 

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

"""     @action(detail=True)
    def get_queryset(self):
        queryset = Profile.objects.all()
        username = self.request.query_params.get('username', None)
        print(username)
        if username is not None:
            queryset = queryset.filter(user = username)
        return queryset """

