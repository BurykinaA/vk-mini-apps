"""
URL configuration for HACKeducation project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from backend import views, artefact, museum, user


urlpatterns = [
    path('api/buy', artefact.edit),
    path('api/data', user.create),
    path('api/data/ex', user.create1),
    path('api/museum', views.mus),
    path('api/museum/<int:id>', views.mus_id),
    path('api/museum/ex/<int:id>', views.mus_id1),
    path('api/art/<int:id>', views.art_id),
    path('', views.index),
    path('persik', user.rank),
    path('persik/<int:id>', user.get_user),
    path('persik/ex/<int:id>', user.get_user1),
    path('admin/', admin.site.urls),
]
