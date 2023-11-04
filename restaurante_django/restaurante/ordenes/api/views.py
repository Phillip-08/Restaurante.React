from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

from ordenes.models import Orden
from ordenes.api.serializers import OrdenSerializer


class OrdenApiViewSet(ModelViewSet):
    serializer_class = OrdenSerializer
    queryset = Orden.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['table', 'status', 'payment', 'close']
    ordering_fields = '__all__'
