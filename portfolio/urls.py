from django.urls import path
from . import views

urlpatterns = [
    path("", views.api_overview, name="api-overview"),
    # Project endpoints
    path("projects/", views.ProjectListCreateView.as_view(), name="project-list"),
    path(
        "projects/<int:pk>/", views.ProjectDetailView.as_view(), name="project-detail"
    ),
    # Skill endpoints
    path("skills/", views.SkillListCreateView.as_view(), name="skill-list"),
    path("skills/<int:pk>/", views.SkillDetailView.as_view(), name="skill-detail"),
    # Contact endpoints
    path("contact/", views.ContactListCreateView.as_view(), name="contact-list"),
    path("contact/<int:pk>/", views.ContactDetailView.as_view(), name="contact-detail"),
]
