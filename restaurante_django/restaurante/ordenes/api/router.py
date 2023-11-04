from rest_framework.routers import DefaultRouter

from ordenes.api.views import OrdenApiViewSet

router_orden = DefaultRouter()

router_orden.register(
    prefix='orders', basename='orders', viewset=OrdenApiViewSet)
