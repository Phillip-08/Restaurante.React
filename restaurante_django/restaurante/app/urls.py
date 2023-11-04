from django.urls import path, include
from .views import home, menu, registro, contacto, agregar_producto, listar_producto,modificar_producto,\
    eliminar_producto

urlpatterns = [
    path('', home, name="home"),
    path('menu/', menu, name="menu"),
    path('registro/', registro, name="registro"),
    path('contacto/', contacto, name="contacto"),
    path('agregar-producto/', agregar_producto, name="agregar_producto"),
    path('listar-producto/', listar_producto, name="listar_producto"),
    path('modificar-producto/<id>/', modificar_producto, name="modificar_producto"),
    path('eliminar-producto/<id>/', eliminar_producto, name="eliminar_producto"),
    ]