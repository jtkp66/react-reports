from surveys.models import Survey
from rest_framework import viewsets, permissions
from .serializers import SurveySerializer

# Survey Viewset


class SurveyViewSet(viewsets.ModelViewSet):
    queryset = Survey.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SurveySerializer
