from django.db import models


class Payment(models.Model):
    competencia = models.DateField()
    data_pagamento = models.DateField()
    modalidade = models.CharField(max_length=50)
    descricao = models.CharField(max_length=50)
    status = models.CharField(max_length=20)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Pagamento {self.descricao} - {self.status}"
