from rest_framework.serializers import ModelSerializer, StringRelatedField, PrimaryKeyRelatedField

from .models import Attachment, Library, Media, MediaType


class AttachmentSerializer(ModelSerializer):
    class Meta:
        model = Attachment
        fields = "__all__"


class MediaSerializer(ModelSerializer):
    attachments = AttachmentSerializer(many=True, required=False)

    class Meta:
        model = Media
        fields = ["id", "title", "data", "library", "attachments"]


class LibrarySerializer(ModelSerializer):
    medias = MediaSerializer(many=True, required=False, read_only=True)

    class Meta:
        model = Library
        fields = [
            "id",
            "title",
            "shared",
            "description",
            "owner",
            "accepted_file_extention",
            "medias",
        ]

    def get_validation_exclusions(self):
        exclusions = super(LibrarySerializer, self).get_validation_exclusions()
        return exclusions + ["owner"]


class MediaTypeSerializer(ModelSerializer):
    class Meta:
        model = MediaType
        fields = "__all__"
