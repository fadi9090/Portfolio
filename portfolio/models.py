from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=100)
    proficiency = models.IntegerField(help_text="Percentage (0-100)")
    icon = models.CharField(
        max_length=10, help_text="Emoji or icon character", blank=True, null=True
    )
    category = models.CharField(
        max_length=50,
        choices=[
            ("frontend", "Frontend"),
            ("backend", "Backend"),
            ("salesforce", "Salesforce"),
            ("tools", "Tools & DevOps"),
        ],
        default="frontend",
    )

    def __str__(self):
        return f"{self.icon or '📌'} {self.name} - {self.proficiency}%"


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="projects/", blank=True, null=True)
    link = models.URLField(blank=True, null=True)
    github_link = models.URLField(
        blank=True, null=True, help_text="GitHub repository link"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    skills = models.ManyToManyField(Skill, related_name="projects", blank=True)

    def __str__(self):
        return self.title

    def get_skills_list(self):
        """Return list of skill names for this project"""
        return [skill.name for skill in self.skills.all()]

    def image_url(self):
        """Return the URL of the image"""
        if self.image:
            return self.image.url
        return None


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200, blank=True, null=True)
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} - {self.sent_at}"
