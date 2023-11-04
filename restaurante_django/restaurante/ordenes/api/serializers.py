from rest_framework.serializers import ModelSerializer

from ordenes.models import Orden
from productos.api.serializers import ProductoSerializer
from tables.api.serializers import TableSerializer


class OrdenSerializer(ModelSerializer):
    product_data = ProductoSerializer(source='product', read_only=True)
    table_data = TableSerializer(source='table', read_only=True)

    class Meta:
        model = Orden
        fields = ['id', 'status', 'table', 'table_data', 'product',
                  'product_data', 'payment', 'close', 'created_at']
