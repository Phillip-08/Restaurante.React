from django.db import models

# Create your models here.
StatusEnum = (
    ("PENDING", "pending"),
    ("DELIVERED", "delivered"),
)


class Orden(models.Model):
    table = models.ForeignKey(
        'tables.Table', on_delete=models.SET_NULL, null=True, blank=True)
    product = models.ForeignKey(
        'productos.Producto', on_delete=models.SET_NULL, null=True, blank=True
    )
    payment = models.ForeignKey(
        'payments.Payment', on_delete=models.CASCADE, null=True, blank=True
    )
    status = models.CharField(max_length=255, choices=StatusEnum)
    created_at = models.DateTimeField(auto_now_add=True)
    close = models.BooleanField(default=False)

    def __str__(self):
        return str(self.table)