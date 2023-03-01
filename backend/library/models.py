from django.db import models
from user.models import User


class Library(models.Model):
    title = models.CharField(max_length=512, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    accepted_file_extention = models.JSONField(default=list, null=True)

    owner = models.ForeignKey(User, on_delete=models.CASCADE)


class Media(models.Model):
    data = models.FileField(upload_to="medias")
    library = models.ForeignKey(
        Library, on_delete=models.CASCADE, related_name="medias"
    )


class Attachment(models.Model):
    name = models.CharField(max_length=512, default="")
    value = models.CharField(max_length=512, default="")
    media = models.ForeignKey(
        Media, on_delete=models.CASCADE, related_name="attachments"
    )


class MediaType(models.Model):
    name = models.CharField(max_length=32, null=True)

    def __str__(self) -> str:
        return self.name