import os

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Attachment, Library, Media, MediaType
from .serializers import AttachmentSerializer, LibrarySerializer, MediaSerializer


class LibraryView(generics.ListCreateAPIView):
    queryset = Library.objects.all()
    serializer_class = LibrarySerializer

    def post(self, request, *args, **kwargs):
        # request.data._mutable = True
        request.data["owner"] = request.user.id
        # request.data._mutable = False

        return self.create(request, *args, **kwargs)

    def get_queryset(self):
        user = self.request.user
        return Library.objects.filter(owner=user)


class LibraryInstanceView(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Library.objects.all()
    serializer_class = LibrarySerializer

    def get_queryset(self):
        user = self.request.user
        return Library.objects.filter(owner=user)


class AttachmentView(generics.CreateAPIView, generics.RetrieveAPIView):
    queryset = Attachment.objects.all()
    serializer_class = AttachmentSerializer


class MediaView(generics.CreateAPIView, generics.RetrieveAPIView):
    queryset = Media.objects.all()
    serializer_class = MediaSerializer

    def post(self, request, *args, **kwargs):
        valid_extensations = Library.objects.get(
            id=request.data["library"]
        ).accepted_file_extention

        _, file_extension = os.path.splitext(self.request.FILES.get("data").name)
        if (
            file_extension not in valid_extensations
            and file_extension.replace(".", "") not in valid_extensations
        ):
            return Response({"Error": "Not Valid file extensation"}, status=400)
        return self.create(request, *args, **kwargs)


class MediaTypeView(APIView):
    def get(self, request, format=None):
        types = [user.name for user in MediaType.objects.all()]
        return Response(types)
