from django.shortcuts import render
from django.http import HttpResponse

#this will be replaced by the code for the POSTS
posts = [
	{
		'user': 'Lizane Botha',
		'post': 'yo',
		'caption': 'lol',
		#'categories': ['new, dumb, help'],
		'date_posted': '16 May 2020'
	},
	{
		'user': 'Tharun Thomas',
		'post': 'yo dog',
		'caption': 'idk',
		#'categories': ['new, boy, firstpost'],
		'date_posted': '16 May 2020'
	}
]

#handles traffic from the home page
def home(request):
    #return HttpResponse('<h1>Blog Home</h1')
    return render(request, 'home.html')

def about(request):
	#return render(request, 'about.html')
	return render(request, 'about.html')

def posts(request):
	context = {
		'posts': posts # the dictionary at the top is passed in
	}
	return render(request, 'posts.html', context) # passes 'context' into the template, and let's us access it within the template

def groups(request):
	#return render(request, 'about.html')
	return render(request, 'groups.html')