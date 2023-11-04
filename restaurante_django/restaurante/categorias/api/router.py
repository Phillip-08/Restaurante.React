from rest_framework.routers import DefaultRouter
from categorias.api.views import CategoriaApiViewSet

router_categoria = DefaultRouter()

router_categoria.register(
    prefix='categorias', basename='categorias', viewset=CategoriaApiViewSet
)
