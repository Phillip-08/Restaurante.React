from django.db import models
from django.db.models.fields.files import ImageField

# Create your models here.

class Inventario(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='inventario')
    price = models.IntegerField(default=0)
    active = models.BooleanField(default=False)
    stock = models.IntegerField(default=0, verbose_name='Stock')
    medida = models.CharField(max_length=225)
    expiration = models.DateField()
    supplier = models.ForeignKey(
        'supplier.Proveedor', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.title
