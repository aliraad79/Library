from django.contrib import admin

from .models import Attachment, Library, MediaType, Media


@admin.register(Library)
class LibraryAdmin(admin.ModelAdmin):
    pass


@admin.register(Attachment)
class AttachmentAdmin(admin.ModelAdmin):
    pass


@admin.register(Media)
class MediaAdmin(admin.ModelAdmin):
    pass


@admin.register(MediaType)
class MediaTypeAdmin(admin.ModelAdmin):
    pass
