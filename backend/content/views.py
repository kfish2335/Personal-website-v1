from django.shortcuts import render, get_object_or_404, redirect

from .models import About, Skill, Job, Certification, Project, Footer, Redirect as RedirectModel

def index(request):
    about = About.objects.first()
    skills = Skill.objects.all()
    jobs = Job.objects.all()
    certifications = Certification.objects.all()
    projects = Project.objects.all()
    footer = Footer.objects.first()
    
    context = {
        'about': about,
        'skills': skills,
        'jobs': jobs,
        'certifications': certifications,
        'projects': projects,
        'footer': footer
    }
    
    return render(request, 'index.html', context)

def handle_redirect(request, slug):
    # Get the redirect object based on the display_url
    redirect_obj = get_object_or_404(RedirectModel, display_url=slug)
    
    # Redirect to the target URL
    return redirect(redirect_obj.redirect_to)
