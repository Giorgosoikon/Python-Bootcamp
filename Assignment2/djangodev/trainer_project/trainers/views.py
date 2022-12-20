from django.shortcuts import render
from .forms import TrainerForm
from .models import Trainer
from django.http import HttpResponseRedirect


def add(request):
    form = TrainerForm(request.POST or None)
    if form.is_valid():
        form.save()
    return render(request, 'add.html', {'form' : form})


def show(request):
    trainer = Trainer.objects.all()
    return render (request, 'show.html', {'trainer': trainer})


def update(request, id):
    trainer = Trainer.objects.get(id=id)
    form = TrainerForm(request.POST, instance=trainer)
    if form.is_valid():
        form.save()
        return HttpResponseRedirect('/')
    return render(request, 'update.html', {"trainer" : trainer})

def delete(request, id):
    form = Trainer.objects.get(id=id)
    form.delete()
    return HttpResponseRedirect('/')

