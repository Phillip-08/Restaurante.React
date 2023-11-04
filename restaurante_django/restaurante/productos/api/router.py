from rest_framework.routers import DefaultRouter

from productos.api.views import ProductoApiViewSet

router_producto = DefaultRouter()

router_producto.register(
    prefix='products', basename='products', viewset=ProductoApiViewSet)
