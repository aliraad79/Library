# Generated by Django 4.1.6 on 2023-03-06 09:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("library", "0011_media_title"),
    ]

    operations = [
        migrations.AlterField(
            model_name="media",
            name="title",
            field=models.CharField(default="", max_length=512),
        ),
    ]
