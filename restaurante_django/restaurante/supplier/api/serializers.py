from rest_framework.serializers import ModelSerializer

from supplier.models import Proveedor

class ProveedorSerializer(ModelSerializer):
    class Meta:
        model = Proveedor
        fields = ['id', 'run','title', 'lastname', 'number','business' ]
