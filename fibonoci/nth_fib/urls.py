from django.conf.urls import url
from nth_fib import views
from django.http import HttpResponse


urlpatterns = [
    url(r'^$', views.submit_n_val,name="submit_nval_form"),
    url(r'^home$', views.submit_n_val,name="submit_nval_form"),
]
