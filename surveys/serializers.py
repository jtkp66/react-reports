from rest_framework import serializers
from surveys.models import Survey

# Survey Serializer


class SurveySerializer(serializers.ModelSerializer):
    class Meta:
        model = Survey
        fields = '__all__'
