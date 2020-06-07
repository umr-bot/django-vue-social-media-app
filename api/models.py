from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Comment(models.Model):
    content = models.TextField(max_length=300)
    user = models.ForeignKey (User, on_delete=models.CASCADE)
    isOpen = models.BooleanField(default=False)

    class Meta:
        unique_together = ['user','content']

    def __str__(self):
        return self.content

class Post(models.Model):
    content = models.TextField(max_length=300)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=100, default="Anonymous")
    comments = models.ManyToManyField(Comment)
    time = models.IntegerField(default=-1)
    location = models.TextField(max_length=100, default="No Location")
    groupid = models.IntegerField(default=-1)
    category = models.TextField(max_length=100, default="No Category")

    class Meta:
        unique_together = (('user','content'),)
        index_together = (('user','content'),)

    def __str__(self):
        return self.content

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg',upload_to='profile_pics')

    def __str__(self):
        return f'{self.user.username} Profile'