from django.contrib import admin
from django.urls import path
from trainers import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('add/', views.add, name='add'),
    path('', views.show, name='show'),
    path('update/<int:id>', views.update, name='update'),
    path('delete/<int:id>', views.delete, name='delete'),
]
