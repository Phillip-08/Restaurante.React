from productos.models import Producto
from django.contrib.auth.forms import UserCreationForm
from users.models import User
from django import forms
from django.forms import ValidationError



class CustomUserForm(UserCreationForm):
    
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'username', 'password1','password2']

class ProductoForm(forms.ModelForm):

    title = forms.CharField(min_length=3, max_length=50)
    price = forms.IntegerField(min_value=500, max_value=250000)
    image = forms.ImageField(required=True,)

    def clean_nombre(self):
        title = self.cleaned_data["title"]
        existe = Producto.objects.filter(nombre__iexact = title).exists()

        if existe:
            raise ValidationError(" Este Menu ya existe")

        return title

    class Meta:
        model = Producto
        fields= '__all__'

