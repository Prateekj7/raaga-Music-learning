# raaga-project_readme


# django-backend_readme

1. pip/pip3 install -r requirements.txt
2. python/python3 manage.py makemigrations
3. python/python3 manage.py migrate
4. sudo chmod 666 /var/run/docker.sock
5. sudo service docker start && docker-compose -f docker-compose.local.yml up
6. python/python3 manage.py runserver
7. python/python3 manage.py runserver


### Create Superuser for Djnago Admin
python3 manage.py createsuperuser

 
### Use this to create model from existing database, then add the app to your INSTALLED_APPS setting
python3 manage.py inspectdb > backend_app/models.py

Reference: 
1. https://docs.djangoproject.com/en/4.1/howto/legacy-databases/
2. https://djangoadventures.com/how-to-integrate-django-with-existing-database/#:~:text=In%20order%20to%20use%20an,to%20solve%20this%20exact%20problem
