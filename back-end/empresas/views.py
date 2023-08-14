from rest_framework import generics
from .models import Empresa
from .serializers import EmpresaSerializer

class EmpresaView(generics.ListCreateAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer
