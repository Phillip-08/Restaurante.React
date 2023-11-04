from rest_framework.routers import DefaultRouter
from supplier.api.views import ProveedorApiViewSet

router_supplier = DefaultRouter()

router_supplier.register(
    prefix='supplier', basename='supplier', viewset=ProveedorApiViewSet
)