from django.db.models.base import Model
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from categorias.models import Categoria
from categorias.api.serializers import CategoriaSerializer


class CategoriaApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = CategoriaSerializer
    queryset = Categoria.objects.all()
