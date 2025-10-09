# Django import
from django.urls import path

# Local application imports
from .views import index_page

urlpatterns = [
    path('', index_page),
]
