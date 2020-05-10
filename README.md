This application is intended to run as a web-based social network.

###1 Pre-requisites for installation
###2 Running the django app

###1 Pre-requisites for installation
To install the python requirments without a virtualenv use the following command in this directory with python pre installed:
	pip install requirements.txt

Virtual enviroment activation instructions
The following is from https://www.geeksforgeeks.org/creating-python-virtual-environment-windows-linux/ :

	"A Virtual Environment is a python environment, that is an isolated working copy of Python which allows you to work on a specific project without affecting other projects
	So basically it is a tool that enables multiple side-by-side installations of Python, one for each project."

In order to use the virtual enviroment the python modulevirtualenv should be installed as follows:
	pip install virtualenv

To create the virtual enviroment:
	python -m venv env
	source env/bin/activate
	pip install -r requirements.txt  # Install all the libs.

To activate the virtual enviroment the following commands must be entered at the terminal for the specific operating systems mentioned.

For Ubuntu or Debian based systems:
	
	source venv_proj2
	
For Windows:
	venv_proj2\Scripts\activate

You can deactivate in both Windows and Ubuntu by using the following command in the terminal:

	deactivate

###2 Running the django app
To run the django app from terminal, the followng command should be run from the proj2/ directory:
	python manage.py runserver

