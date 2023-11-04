from django.db import models
from django.db.models.fields.files import ImageField


# Create your models here.
class Producto(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='productos')
    price = models.DecimalField(max_digits=10, decimal_places=0)
    active = models.BooleanField(default=False)
    stock = models.IntegerField(default=0, verbose_name='Stock')
    category = models.ForeignKey(
        'categorias.Categoria', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.title