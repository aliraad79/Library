from rest_framework.serializers import ModelSerializer

from .models import Library


class LibrarySerializer(ModelSerializer):
    class Meta:
        model = Library
        fields = ["id", "title", "description", "owner"]

    def get_validation_exclusions(self):
        exclusions = super(LibrarySerializer, self).get_validation_exclusions()
        return exclusions + ["owner"]
