# Generated by Django 4.1.6 on 2023-02-27 09:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("library", "0007_media_library"),
    ]

    operations = [
        migrations.CreateModel(
            name="MediaType",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=32, null=True)),
            ],
        ),
    ]
