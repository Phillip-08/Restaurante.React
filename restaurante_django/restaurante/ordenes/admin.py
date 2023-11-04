from django.contrib import admin
from ordenes.models import Orden

@admin.register(Orden)
class OrdenAdmin(admin.ModelAdmin):
    list_display = ['table', 'product', 'status', 'created_at']

