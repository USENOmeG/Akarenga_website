# Built-in libraries.
import jwt

# Django imports
from django.contrib import messages
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.views.decorators.csrf import ensure_csrf_cookie

# Local application imports
# e.g, `models`, `serializer`, `forms`.

# Third party libraries.
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response


def index_page(request):
    return Response
