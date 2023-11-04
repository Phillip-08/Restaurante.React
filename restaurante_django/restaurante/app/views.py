from django.shortcuts import render
from .filters import ProductoFilter
from productos.models import Producto
from django.contrib import messages
from django.http import Http404
from django.contrib.auth import login, authenticate
from .forms import CustomUserForm
from django.core.paginator import Paginator
from django.shortcuts import render, redirect, get_object_or_404
# Create your views here.

def home(request):
    return render(request, 'app/home.html')

def menu(request):

    context = {}
    producto_filter = ProductoFilter(
        request.GET,
        queryset= Producto.objects.all().order_by('category','title')
    )
    context['producto_filter'] = producto_filter
    
    paginated_producto_filter =Paginator(producto_filter.qs, 6)
    page_number =request.GET.get('Page')
    producto_page_obj =paginated_producto_filter.get_page(page_number)

    context['person_page_obj']= producto_page_obj
    
    return render(request, 'app/menu.html', context=context)

def registro(request):

    data= {
        'form':CustomUserForm()
    }

    if request.method == 'POST': 
        formulario = CustomUserForm(request.POST)
        if formulario.is_valid():
            formulario.save()
            #autenticar al usuario y rediridirlo al inicio
            email = formulario.cleaned_data['email']
            password = formulario.cleaned_data['password1']
            email = authenticate(username=email, password=password)
            login(request, email)
            messages.success(request, "Te has registrado correctamenta")
            return redirect(to='home')
        data["form"] = formulario

    return render(request, 'registration/registro.html', data)

def contacto(request):
    return render (request, 'app/contacto.html')

def agregar_producto(request):
    return render(request, 'app/producto/agregar.html')

def listar_producto(request):
    return render(request, 'app/producto/listar.html')

def modificar_producto(request):
    return render(request, 'app/producto/modificar.html')

def eliminar_producto(request):
    producto= get_object_or_404(Producto, id=id)
    producto.delete()
    messages.success(request, "Eliminado Correctamente")
    return redirect(to="listar_producto")
