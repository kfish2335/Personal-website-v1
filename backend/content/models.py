from django.db import models

# Model for "About Me" section
class About(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    
    def __str__(self):
        return self.title

# Model for "Skills" section
class Skill(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

# Model for "Experience" section
class Job(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)  # Optional for current jobs
    
    def __str__(self):
        return f"{self.title} at {self.company}"

class Certification(models.Model):
    title = models.CharField(max_length=200)
    issuer = models.CharField(max_length=200, blank=True, null=True)
    date_issued = models.DateField(blank=True, null=True)
    
    def __str__(self):
        return f"{self.title} from {self.issuer}"

# Model for "Projects" section
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    link = models.URLField()
    gitLink = models.URLField()
    image = models.ImageField(upload_to='projects/')
    
    def __str__(self):
        return self.title

# Model for "Footer" section
class Footer(models.Model):
    email = models.EmailField()
    linkedin = models.URLField()
    instagram = models.URLField()
    resume = models.FileField(upload_to='resumes/')
    
    def __str__(self):
        return f"Footer - {self.email}"

# Model for Project url  
class Redirect(models.Model):
    display_url = models.CharField(max_length=255, unique=True, help_text="The URL to display on the website (e.g., 'example-url').")
    redirect_to = models.URLField(help_text="The actual URL to redirect to (e.g., 'https://example.com').")

    def __str__(self):
        return self.display_url