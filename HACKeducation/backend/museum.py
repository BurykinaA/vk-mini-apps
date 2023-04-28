from .models import Museum
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
async def create(name, image_url, description):
    museum = await Museum.objects.create(name, image_url, description)

    museum.save()
