from rest_framework.serializers import ModelSerializer

from inventory.models import Inventario
from supplier.api.serializers import ProveedorSerializer


class InventorySerializer(ModelSerializer):
    supplier_data = ProveedorSerializer(source='supplier', read_only=True)

    class Meta:
        model = Inventario
        fields = ['id', 'title', 'image', 'price','stock', 'expiration', 'medida',
                  'active', 'supplier', 'supplier_data']
