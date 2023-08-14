from rest_framework import serializers
from .models import Empresa


class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = ["id", "name", "cpf", "fancy_name", "logotype", "address"]
        read_only_fields = ["id"]
        extra_kwargs = {"name":{"required":True}, "cpf":{"required":True}}


    def create(self, validated_data):
        return Empresa.objects.create(**validated_data)
