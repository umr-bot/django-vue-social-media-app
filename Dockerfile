FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /composeexample
WORKDIR /composeexample
ADD requirements.txt /composeexample/
RUN pip install -r requirements.txt
ADD . /composeexample/
