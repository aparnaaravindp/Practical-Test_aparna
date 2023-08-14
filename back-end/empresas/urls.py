from django.urls import path
from . import views

urlpatterns = [
    path("empresas/", views.EmpresaView.as_view())
]