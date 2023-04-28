from django.db import models


class User(models.Model):
    id_vk = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=200, null=True)
    surname = models.CharField(max_length=200, null=True)
    artefacts_count = models.IntegerField(null=True, default=0)
    artcoins_count_per_min = models.IntegerField(null=True, default=0)
    artcoins = models.IntegerField(null=True, default=1000)


class Museum(models.Model):
    name = models.CharField(max_length=200, null=True)
    image_url = models.TextField(null=True)
    description = models.TextField(null=True)


class Artefact(models.Model):
    type_art = models.CharField(null=True, max_length=20)
    price = models.IntegerField(null=True)
    current_income = models.IntegerField(null=True)
    trades_count = models.IntegerField(null=True)
    title = models.CharField(null=True, max_length=200)
    text = models.TextField(null=True)
    image_url = models.TextField(null=True)
    unlock_code = models.IntegerField(null=True)
    owner = models.ForeignKey(User, on_delete=models.SET_DEFAULT, null=True, default=None) #ствим null
    museum = models.ForeignKey(Museum, on_delete=models.CASCADE, null=True) #удаляем с концами
