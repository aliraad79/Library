#!/bin/bash
set -e

export DJANGO_SETTINGS_MODULE=config.settings
echo "Applying migrations"
./manage.py migrate
echo "Creatinge file types"
./manage.py createfiletypes
echo "Starting server"
gunicorn config.wsgi:application --workers 1 --bind 0.0.0.0:${PORT}