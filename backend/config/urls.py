from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path

urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "api/",
        include(
            [
                path("library/", include("library.urls")),
                re_path(r"^auth/", include("djoser.urls.base")),
                re_path(r"^auth/", include("djoser.urls.authtoken")),
                re_path(r"^auth/", include("djoser.urls.jwt")),
            ]
        ),
    ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
