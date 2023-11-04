from rest_framework.routers import DefaultRouter

from inventory.api.views import InventarioApiViewSet

router_inventory = DefaultRouter()

router_inventory.register(
    prefix='inventory', basename='inventory', viewset=InventarioApiViewSet)