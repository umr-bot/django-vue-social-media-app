"""proj2 URL Configuration

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

Here we set up the mapping of different urls so that they can be handled in a different way
Tell's the whole website which urls should send us to our social media app
"""

"""
    path(route,view,kwargs,name)
    -- route:   a string that contains a URL pattern
    -- view:    when Django finds a matching pattern, it calls the specified view functon
                --> The logic within this location handles the route further
    -- kwargs:  Arbitrary keyword arguments can be passed in  dictionary to the taget view
                (optional)
    -- name:    Naming your URL lets you refer to it unambiguously from elsewhere in Django, 
                especially from within templates.
"""

from django.contrib import admin
from django.urls import include, path
from django.conf.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('social_media_app.urls')), # This points the root url localhost:8000/ to homepage
    path('social_media_app/', include('social_media_app.urls')), # This points the explicit url of localhost:8000/social_media_app to homepage
    path('chat/', include('chat.urls')), # Works same as homepage root url pointer above
    path('accounts/', include('accounts.urls'))  
]
