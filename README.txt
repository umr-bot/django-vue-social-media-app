

How to get frontend to work with backend:

1. Set up your model - in models.py set up the model and all the necessary functions it will need

2. Next set up the serializer for your model - this will handle our backend data, allows python to understand complex data 
    and later can send data to frontend need to make a serializer for every model,
    they are classes you need to define, use rest_framework to automatically create serializer for the model

3. Setup the viewset for your model in views.py, this will process the request you get from the frontend,
    we use the rest_framework viewset

4. In urls.py, register the viewset, pretty obvious

5. In the corresponding Vue Component, send POST and GET to backend via axios to the API url:
    "http://127.0.0.1:8000/api/yoururlhere/"

6. Make sure after you change any of the models to makemigrate and migrate 