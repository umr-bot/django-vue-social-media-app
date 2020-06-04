from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):
    content = models.TextField(max_length=300)
    user = models.ForeignKey (User, on_delete=models.CASCADE)

    class Meta:
        unique_together = (('user','content'),)
        index_together = (('user','content'),)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg',upload_to='profile_pics')

    def __str__(self):
        return f'{self.user.username} Profile'