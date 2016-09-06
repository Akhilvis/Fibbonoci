from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def submit_n_val(request):
	nth_term=F(6)
	return render(request,'result.html',{'N':nth_term})
def Home(request):
	return render(request,'home_page.html')

def F(n):
	a,b=1,1
	n=6
	for i in xrange(n-2):
   		a,b=b,a+b
	return b