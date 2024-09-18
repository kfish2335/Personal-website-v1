from django.contrib import admin
from .models import About, Skill, Job, Certification, Project, Footer, Redirect
# Register your models here.


# Register each model
admin.site.register(About)
admin.site.register(Skill)
admin.site.register(Job)
admin.site.register(Certification)
admin.site.register(Project)
admin.site.register(Footer)
admin.site.register(Redirect)