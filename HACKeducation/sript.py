from peewee import *
from time import sleep


db = SqliteDatabase('db.sqlite3')

class backend_user(Model):
    artcoins = IntegerField(null=True, default=1000)
    artcoins_count_per_min = IntegerField(null=True, default=0)
    id_vk = IntegerField(primary_key=True)

    class Meta:
        database = db

backend_user.create_table() # создаем таблицу

while True:
    users = backend_user.select()

    for user in users:
        print(user)
        user.artcoins += user.artcoins_count_per_min
        user.save()
    sleep(60)
