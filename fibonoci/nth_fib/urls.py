from django.conf.urls import url
from nth_fib import views
from django.http import HttpResponse


urlpatterns = [
    url(r'^$', views.Home, name="Homepage"),
    url(r'^home$', views.submit_n_val, name="submit_nval_form"),
]
