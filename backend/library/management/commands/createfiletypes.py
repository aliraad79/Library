from django.core.management.base import BaseCommand
from library.models import MediaType


class Command(BaseCommand):
    """
    Create all media types if none exist
    Example:
        manage.py createfiletypes
    """

    def add_arguments(self, parser):
        parser.add_argument("--path", default="./mediaTypes.txt")

    def handle(self, *args, **options):
        file_path = options["path"]
        with open(file_path, "r") as f:
            types = f.readlines()
            for t in types:
                MediaType.objects.create(name=t.replace("\n", ""))

        self.stdout.write(f"Media types created")
