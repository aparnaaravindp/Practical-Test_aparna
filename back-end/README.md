# Practical-Test

## Introduction
The application can perform register empresas and list all the empresas.

## Tables
empresas


## Endpoints

**Empresas**

Post - empresas/ - Create empresas
-name - string
- cpf - number
- fancy_name - string
- logotype - string
- address - string

Get - empresas/ - List empresas



## How to run the app

- First clone the project repository in your device
- Create virtual environment using this command **python -m venv venv**
- Activate the environment using this command **source venv/Scripts/activate**
- Install Django and Django restframework using this command **pip install Django** and **pip install djangorestframework**
- To update the dependencies after each installation run this command **pip freeze > requirements.txt**
- If the project already have dependencies, for installing the dependencies use this command **pip install -r requirements.txt**
- For makemigrations use this command **python manage.py makemigrations**
- For run migrations use this command **python manage.py migrate**
- Then **python manage.py runserver**