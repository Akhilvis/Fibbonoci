from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers.json import DjangoJSONEncoder
from math import sqrt
import json
import decimal

# Create your views here.
@csrf_exempt
def submit_n_val(request):
	data=json.loads(request.body)
	n=int(data['n'])
	nth_term=F(n)
	return HttpResponse(json.dumps({'N':nth_term},cls=DjangoJSONEncoder), content_type='application/javascript')
def Home(request):
	return render(request,'home_page.html')

def F(n):
	decimal.getcontext().prec = 100

	a,b=1,1
	for i in xrange(n-2):
   		a,b=b,a+b
   	return ((1+sqrt(5))**n-(1-sqrt(5))**n)/(2**n*sqrt(5))
