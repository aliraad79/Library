# Generated by Django 4.1.6 on 2023-03-04 07:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("library", "0008_mediatype"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="attachment",
            name="value",
        ),
        migrations.AddField(
            model_name="attachment",
            name="fieldValue",
            field=models.FileField(null=True, upload_to=""),
        ),
        migrations.AddField(
            model_name="attachment",
            name="textValue",
            field=models.TextField(null=True),
        ),
    ]
