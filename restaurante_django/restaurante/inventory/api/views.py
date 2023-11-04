from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend

from inventory.models import Inventario
from inventory.api.serializers import InventorySerializer

class InventarioApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = InventorySerializer
    queryset = Inventario.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['supplier', 'active']