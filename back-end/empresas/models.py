from django.db import models


class Empresa(models.Model):
    name = models.CharField(max_length=50)
    cpf = models.IntegerField(unique=True)
    fancy_name = models.CharField(max_length=100)
    logotype = models.CharField(max_length=170)
    address = models.CharField(max_length=120)




