This application is intended to run as a web-based social network.

###1 Pre-requisites for installation
###2 Running the django app

###1 Pre-requisites for installation
Docker has to be pre installed for the application to run. Follow the offical documentations instructions for your respective OS to install Docker at https://docs.docker.com/get-docker/

###2 Running the django app
To run the django app from terminal,the followng commmands should be run:
<<<<<<< HEAD
	
	docker-compose build
	docker-compose up -d
	docker-compose run web python manage.py migrate
	docker-compose run web python manage.py runserver
=======

        docker-compose build
        docker-compose up -d
        docker-compose run web python manage.py migrate
        docker-compose run web python manage.py runserver
>>>>>>> 2604a5c239e1a90b2f8119ad8ad7c6a7fd45560c
