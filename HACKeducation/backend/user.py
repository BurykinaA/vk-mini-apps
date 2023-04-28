from rest_framework.decorators import api_view

from .models import Artefact, User
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse


@api_view(['POST', 'GET'])
def create(request):
    user_id = request.data.get("userId")
    name = request.data.get("name")
    surname = request.data.get("surname")

    user, created = User.objects.get_or_create(id_vk=user_id)

    if created:
        user.name = name
        user.surname = surname
        user.artefacts_count = 0
        user.artcoins_count_per_min = 0
        user.artcoins = 1000
        user.save()

    owner1 = User.objects.get(id_vk=user_id)

    artefacts = Artefact.objects.filter(owner_id=owner1).filter(type_art='ored').values()
    artefacts_list = list(artefacts)
    print(artefacts_list)
    return JsonResponse(artefacts_list, safe=False)


@api_view(['POST', 'GET'])
def create1(request):
    user_id = request.data.get("userId")

    owner1 = User.objects.get(id_vk=user_id)

    artefacts = Artefact.objects.filter(owner_id=owner1).filter(type_art='exc').values()
    artefacts_list = list(artefacts)
    print(artefacts_list)
    return JsonResponse(artefacts_list, safe=False)


@api_view(['POST', 'GET'])
def rank(request):
    users = User.objects.order_by("-artefacts_count").values()
    users_list = list(users)
    for i in range(len(users_list)):
        users_list[i]['num'] = i + 1
        users_list[i]['id'] = users_list[i]['id_vk']
    return JsonResponse(users_list, safe=False)


@api_view(['POST', 'GET'])
def get_user(request, id):
    owner1 = User.objects.get(id_vk=id)

    artefacts = Artefact.objects.filter(owner_id=owner1).filter(type_art='ored').values()
    artefacts_list = list(artefacts)
    print(artefacts_list)
    return JsonResponse(artefacts_list, safe=False)

@api_view(['POST', 'GET'])
def get_user1(request, id):
    owner1 = User.objects.get(id_vk=id)

    artefacts = Artefact.objects.filter(owner_id=owner1).filter(type_art='exc').values()
    artefacts_list = list(artefacts)
    print(artefacts_list)
    return JsonResponse(artefacts_list, safe=False)
