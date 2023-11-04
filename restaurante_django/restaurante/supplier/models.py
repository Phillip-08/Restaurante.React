from django.db import models

# Create your models here.
class Proveedor(models.Model):
    run = models.CharField(max_length=225, null=True)
    title = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    number = models.CharField(max_length=255)
    business = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.title
