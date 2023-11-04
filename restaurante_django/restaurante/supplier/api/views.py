from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from supplier.models import Proveedor
from supplier.api.serializers import ProveedorSerializer

class ProveedorApiViewSet(ModelViewSet):
    #permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer
