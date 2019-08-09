from django.db import models
from datetime import datetime


class Survey(models.Model):
    coordinator = models.CharField(max_length=100)
    student = models.CharField(max_length=100)
    host = models.CharField(max_length=100, blank=True)
    question = models.TextField(blank=True)
    is_complete = models.BooleanField(default=False)
    contact_date = models.DateTimeField(default=datetime.now, blank=True)
