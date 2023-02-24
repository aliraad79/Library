from rest_framework import generics

from .models import Library
from .serializers import LibrarySerializer


class LibraryView(generics.ListCreateAPIView):
    queryset = Library.objects.all()
    serializer_class = LibrarySerializer

    def post(self, request, *args, **kwargs):
        request.data["owner"] = request.user.id
        return self.create(request, *args, **kwargs)

    def get_queryset(self):
        user = self.request.user
        return Library.objects.filter(owner=user)
