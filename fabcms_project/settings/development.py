from .base import *

DEBUG = True
INSTALLED_APPS += (
    # and other apps for local development
)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, '../db.sqlite3'),
    }
}
