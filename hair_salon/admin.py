from django.contrib import admin
from .models import Cutting, Styling, Colour, Highlights, Toners, Treatment, Extension


# Register your models here.
admin.site.register(Cutting)
admin.site.register(Styling)
admin.site.register(Colour)
admin.site.register(Highlights)
admin.site.register(Toners)
admin.site.register(Treatment)
admin.site.register(Extension)

