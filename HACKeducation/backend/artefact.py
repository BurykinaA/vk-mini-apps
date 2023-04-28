from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponseNotFound, HttpResponse
from rest_framework.decorators import api_view

from .models import Artefact, User
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import asyncio


def index(request):
    artefacts = Artefact.objects.all()
    return JsonResponse({'artefacts': artefacts})


def create(type_art,
           price,
           current_income,
           trades_count,
           title,
           text,
           image_url,
           unlock_code,
           owner,
           museum):
    artefact = Artefact.objects.create(type_art,
                                       price,
                                       current_income,
                                       trades_count,
                                       title,
                                       text,
                                       image_url,
                                       unlock_code,
                                       owner,
                                       museum)

    artefact.save()


@api_view(['POST', 'GET'])
def edit(request):
    id = request.data.get("art_id")
    owner_id = request.data.get("userId")
    print(id, owner_id)
    artefact = Artefact.objects.get(id=id)
    print(artefact)


    user = User.objects.get(id_vk=owner_id)  # получаем объект User по artefact.owner.id
    if user.artcoins >= artefact.price:
        user.artefacts_count += 1
        user.artcoins_count_per_min += artefact.current_income*2
        user.artcoins -= artefact.price
        user.save()

        artefact.owner = user
        artefact.price = artefact.price * 2
        artefact.current_income = artefact.current_income * 2
        artefact.trades_count += 1

        artefact.save()

        if artefact.owner is not None:
            user = artefact.owner
            user.artefacts_count -= 1
            user.artcoins_count_per_min -= artefact.current_income / 2
            user.save()

    return HttpResponse("")


async def delete(id):
    person = Artefact.objects.get(id=id)
    person.delete()
