# Generated by Django 4.1.6 on 2023-02-27 08:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("library", "0006_media_remove_attachment_data_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="media",
            name="library",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="medias",
                to="library.library",
            ),
            preserve_default=False,
        ),
    ]
