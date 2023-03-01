from rest_framework.serializers import ModelSerializer

from .models import Attachment, Library, Media, MediaType


class LibrarySerializer(ModelSerializer):
    class Meta:
        model = Library
        fields = ["id", "title", "description", "owner", "accepted_file_extention"]

    def get_validation_exclusions(self):
        exclusions = super(LibrarySerializer, self).get_validation_exclusions()
        return exclusions + ["owner"]


class MediaSerializer(ModelSerializer):
    class Meta:
        model = Media
        fields = ["id", "data", "library"]


class AttachmentSerializer(ModelSerializer):
    class Meta:
        model = Attachment
        fields = "__all__"


class MediaTypeSerializer(ModelSerializer):
    class Meta:
        model = MediaType
        fields = "__all__"
