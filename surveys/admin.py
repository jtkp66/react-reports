from django.contrib import admin

from .models import Survey


class SurveyAdmin(admin.ModelAdmin):
    list_display = ('id', 'coordinator', 'is_complete',
                    'student', 'host', 'contact_date')
    list_display_links = ('id', 'coordinator')
    list_filter = ('coordinator',)
    list_editable = ('is_complete',)
    search_fields = ('coordinator', 'student', 'is_complete')
    list_per_page = 25


admin.site.register(Survey, SurveyAdmin)
