from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'index.html')
    

# About view
def about(request):
    return render(request, 'about.html')


# Gallery view
def gallery(request):
    return render(request, 'gallery.html')


# Services view
def services(request):
    return render(request, 'services.html')