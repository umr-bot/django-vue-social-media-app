from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
<<<<<<< HEAD
from .models import Post, Profile, Comment
=======
from .models import Post, Profile, Group
>>>>>>> 333e7967458424c59ba1769ca17919b49fa5bdec

# this will handle our backend data, allows python to understand complex data and later can send data to frontend
# need to make a serializer for every model
# they are classes you need to define, and use rest framework to automatically create serializer for the model

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','email','username','password')
        extra_kwargs = {'password':{'required':True, 'write_only':True}}

    def create(self, validated_data): # we need to assign token to a user to validate user for frontend
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id','content','user','isOpen']

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id','content','user','comments','time','location','groupid','category','username']

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id','image','user')
        
class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id','user')
