from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponseRedirect, HttpResponse
from rest_framework.decorators import api_view
from backend import artefact

from .models import *


@csrf_exempt
def index(request):
    artefacts = Artefact.objects.values()
    artefacts_list = list(artefacts)
    return JsonResponse(artefacts_list, safe=False)


@csrf_exempt
def mus(request):
    museums = Museum.objects.values()
    artefacts_list = list(museums)
    return JsonResponse(artefacts_list, safe=False)


@csrf_exempt
def mus_id(request, id):
    artefacts = Artefact.objects.filter(museum=id).filter(type_art='ored').values()
    artefacts_list = list(artefacts)
    return JsonResponse(artefacts_list, safe=False)

@csrf_exempt
def mus_id1(request, id):
    artefacts = Artefact.objects.filter(museum=id).filter(type_art='exc').values()
    artefacts_list = list(artefacts)
    return JsonResponse(artefacts_list, safe=False)


@csrf_exempt
def art_id(request, id):
    artefacts = list(Artefact.objects.filter(id=id).values())
    return JsonResponse(artefacts[0], safe=False)


@api_view(['POST', 'GET'])
def index1(request):
    print(request.data)
    return HttpResponse("")
