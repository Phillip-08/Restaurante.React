"""restaurante URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from django.conf.urls.static import static
from django.conf import settings
from drf_yasg import openapi

from users.api.router import router_user
from categorias.api.router import router_categoria
from productos.api.router import router_producto
from tables.api.router import router_table
from ordenes.api.router import router_orden
from payments.api.router import router_payments
from supplier.api.router import router_supplier
from inventory.api.router import router_inventory

schema_view = get_schema_view(
   openapi.Info(
      title="restaurante API",
      default_version='v1',
      description="Documentacion de restaurante de API",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="c.phillip.07@hotmail.cl"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('', include('app.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path("admin/", admin.site.urls),
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('api/', include('users.api.router')),
    path('api/', include(router_user.urls)),
    path('api/', include(router_categoria.urls)),
    path('api/', include(router_producto.urls)),
    path('api/', include(router_table.urls)),
    path('api/', include(router_orden.urls)),
    path('api/', include(router_payments.urls)),
    path('api/', include(router_supplier.urls)),
    path('api/', include(router_inventory.urls)),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)