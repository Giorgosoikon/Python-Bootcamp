# Generated by Django 3.2.5 on 2021-07-18 16:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('trainers', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trainer',
            name='tid',
        ),
    ]
