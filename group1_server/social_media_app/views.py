from django.shortcuts import render
from django.http import HttpResponse

#this will be replaced by the code for the POSTS
user_posts = [
	{
		'user': 'Lizane Botha',
		'content': 'yo',
		'caption': 'lol',
		'date_posted': '16 May 2020',
		'categories': ['new', 'dumb', 'help']
	},
	{
		'user': 'Tharun Thomas',
		'content': 'yo dog',
		'caption': 'idk',
		'date_posted': '16 May 2020',
		'categories': ['new', 'boy', 'firstpost']
	}
]

#handles traffic from the home page
def home(request):
    #return HttpResponse('<h1>Blog Home</h1')
    return render(request, 'home.html')

def about(request):
	#return render(request, 'about.html')
	return render(request, 'about.html', {'title' : 'about'})

def posts_page(request):
	context = {
		'posts': user_posts # the dictionary at the top is passed in
	}
	return render(request, 'posts.html', context) # passes 'context' into the template, and let's us access it within the template

def groups(request):
	#return render(request, 'about.html')
	return render(request, 'groups.html', {'title' : 'groups'})