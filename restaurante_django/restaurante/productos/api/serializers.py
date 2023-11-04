from rest_framework.serializers import ModelSerializer

from productos.models import Producto
from categorias.api.serializers import CategoriaSerializer


class ProductoSerializer(ModelSerializer):
    category_data = CategoriaSerializer(source='category', read_only=True)

    class Meta:
        model = Producto
        fields = ['id', 'title', 'image', 'price','stock',
                  'active', 'category', 'category_data']
