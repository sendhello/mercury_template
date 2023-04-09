import yaml
from django.core.exceptions import ImproperlyConfigured

from .base import *

# Load YAML config file provided by ansible
YAML_CONFIG_FILE = os.path.join(BASE_DIR, '..', 'secrets.yml')
with open(YAML_CONFIG_FILE, 'r') as stream:
    yaml_config = yaml.load(stream)


def get_yaml_setting(setting):
    try:
        return yaml_config[setting]
    except KeyError:
        error_msg = "Set the %s variable in secrets file" % setting
        raise ImproperlyConfigured(error_msg)


SECRET_KEY = yaml_config['django_secret']

DEBUG = False

ALLOWED_HOSTS = ['*']

INSTALLED_APPS += (
    # other apps for production site
)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': yaml_config['pg_db_name'],
        'USER': yaml_config['pg_db_user'],
        'PASSWORD': yaml_config['pg_db_password'],
        'HOST': yaml_config['pg_db_host']
    }
}
