# Generated by Django 4.2 on 2023-04-27 22:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Museum',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, null=True)),
                ('image_url', models.TextField(null=True)),
                ('description', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id_vk', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200, null=True)),
                ('surname', models.CharField(max_length=200, null=True)),
                ('artefacts_count', models.IntegerField(null=True)),
                ('artcoins_count_per_min', models.IntegerField(null=True)),
                ('artcoins', models.IntegerField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Artefact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_art', models.CharField(max_length=20, null=True)),
                ('price', models.IntegerField(null=True)),
                ('current_income', models.IntegerField(null=True)),
                ('trades_count', models.IntegerField(null=True)),
                ('title', models.CharField(max_length=200, null=True)),
                ('text', models.TextField(null=True)),
                ('image_url', models.TextField(null=True)),
                ('unlock_code', models.IntegerField(null=True)),
                ('museum', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.museum')),
                ('owner', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_DEFAULT, to='backend.user')),
            ],
        ),
    ]