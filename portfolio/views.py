from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Project, Skill, Contact
from .serializers import ProjectSerializer, SkillSerializer, ContactSerializer


class ProjectListCreateView(generics.ListCreateAPIView):
    queryset = Project.objects.all().order_by("-created_at")
    serializer_class = ProjectSerializer

    def get_serializer_context(self):
        """Pass request to serializer for full image URLs"""
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context


class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_serializer_context(self):
        """Pass request to serializer for full image URLs"""
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context


# Skill Views
class SkillListCreateView(generics.ListCreateAPIView):
    queryset = Skill.objects.all().order_by("-proficiency")
    serializer_class = SkillSerializer


class SkillDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


# Contact Views - Fixed field name from 'created_at' to 'sent_at'
class ContactListCreateView(generics.ListCreateAPIView):
    queryset = Contact.objects.all().order_by(
        "-sent_at"
    )  # Fixed: changed from 'created_at' to 'sent_at'
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {"message": "Message sent successfully!", "data": serializer.data},
            status=status.HTTP_201_CREATED,
        )


class ContactDetailView(generics.RetrieveDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


# API Overview
@api_view(["GET"])
def api_overview(request):
    api_urls = {
        "Projects": "/api/projects/",
        "Project Detail": "/api/projects/<int:id>/",
        "Skills": "/api/skills/",
        "Skill Detail": "/api/skills/<int:id>/",
        "Contact": "/api/contact/",
        "Contact Detail": "/api/contact/<int:id>/",
    }
    return Response(api_urls)
