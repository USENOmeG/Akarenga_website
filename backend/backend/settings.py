
# Built-in library
import os
import dj_database_url

# Third party library
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-7yj%5k@hrtcby8m*sxff(+4ji6ea=k##cf#^2zlc*%aiaz4^*2'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get('DEBUG', 'True') == 'True'

if DEBUG:
    # For development when `DEBUG == True`.
    # Make sure to turn it into `False` for production.
    print("=== DEBUG is enabled ===")
    print("Note: \n Before deploying for production, please make sure to turn the debut to `False.`")

    ALLOWED_HOSTS = ["*"]

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'akarenga_attorneysoffice_website',
            'USER': 'db_user',
            'PASSWORD': 'akarenga1111',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }

    CORS_ALLOW_CREDENTIALS = True
    CORS_ALLOWED_ORIGINS = ["http://localhost:3000",
                            "http://localhost:8000", "http://127.0.0.1:8000"]
    CSRF_TRUSTED_ORIGINS = ["http://localhost:3000",
                            "http://localhost:8000", "http://127.0.0.1:8000"]

    CSRF_COOKIE_HTTPONLY = False
    SESSION_COOKIE_HTTPONLY = False
    CSRF_COOKIE_SECURE = True
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SAMESITE = 'None'
    SESSION_COOKIE_SAMESITE = 'None'

else:
    # For production when `DEBUG == FALSE`
    print("=== DEBUG is disabled ===")
    print("Note: \n This project is ready for production. \n Please check all the information and docs in this repository before deploying.")

    ALLOWED_HOSTS = []

    CSRF_COOKIE_SECURE = True
    SESSION_COOKIE_SECURE = True

    # CloudFlare does it for the project, therefore, no need to turn it to `True`.
    SECURE_SSL_REDIRECT = False
    SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

    # Enter domain name for the website.
    CSRF_COOKIE_DOMAIN = ''
    SESSION_COOKIE_DOMAIN = ''

    # Required if you use cookies/sessions authentication across origins.
    CORS_ALLOW_CREDENTIALS = True

    # Allow JavaScript to read Token, therefore, able to user authentication across RestAPI.
    CSRF_COOKIE_HTTPONLY = False

    # Allow sending CSRF either from RestAPI to ReactApp, or vice versa.
    CSRF_COOKIE_SAMESITE = 'None'

    DATABASES = {
        'default': dj_database_url.config(default=os.environ.get('DATABASE_URL'))
    }

    # Add frontend server and any other servers to allow CORS and CSRF.
    CORS_ALLOWED_ORIGINS = []
    CSRF_TRUSTED_ORIGINS = []

    # RestAPI detects the route, triggered from `.views`.
    # If the user is not authenticated, it will redirect to `sign_in`.
    LOGIN_URL = ''

# Application definition.
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'api',
    'corsheaders',

    'allauth',
    'allauth.account',
    'allauth.socialaccount',
]

MIDDLEWARE = [
    # Default middleware.
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    # Imported middleware.
    'allauth.account.middleware.AccountMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware'
]

# Use session authentication for DRF (DRF: Django rest framework).
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'

# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# AUTH_USER_MODEL = 'api.CustomUser'
# ACCOUNT_USER_MODEL_EMAIL_FIELD = 'email_address'


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/
LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Japan'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
