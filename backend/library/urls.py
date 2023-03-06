from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from .views import (
    AttachmentView,
    LibraryInstanceView,
    LibraryView,
    MediaTypeView,
    MediaView,
)

urlpatterns = [
    path("", LibraryView.as_view()),
    path("<int:pk>", LibraryInstanceView.as_view()),
    path("attachment", AttachmentView.as_view()),
    path("attachment/<int:pk>", AttachmentView.as_view()),
    path("media", MediaView.as_view()),
    path("media/<int:pk>", MediaView.as_view()),
    path("mediaTypes", MediaTypeView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
