import django_filters
from productos.models import Producto

class ProductoFilter(django_filters.FilterSet):

    class Meta:
        model = Producto
        fields = [
            'category',
        ]