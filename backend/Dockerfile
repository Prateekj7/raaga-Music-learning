# Create our image based on Python 3.9
FROM python:3.9-slim-buster

#setup working dir
WORKDIR /backend

# Expose ports
EXPOSE 8000

# Tell Python to not generate .pyc
ENV PYTHONDONTWRITEBYTECODE 1

# Turn off buffering
ENV PYTHONUNBUFFERED 1

# copy all source files from current dir to docker /backend directory
COPY . .

# install app dependencies
RUN pip install -r requirements.txt

# Reflect changes done in App model to database
# RUN python manage.py makemigrations
# RUN python manage.py migrate