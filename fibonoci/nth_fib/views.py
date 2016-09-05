from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def submit_n_val(request):
	return render(request,'home_page.html')
