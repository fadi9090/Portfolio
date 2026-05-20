from django.contrib import admin
from .models import Project, Skill, Contact


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "proficiency", "icon")
    search_fields = ("name",)
    list_filter = ("category", "proficiency")
    list_editable = ("proficiency", "icon")


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "created_at", "display_skills")
    search_fields = ("title", "description")
    list_filter = ("created_at", "skills")
    filter_horizontal = ("skills",)  # Nice widget for many-to-many
    fieldsets = (
        (
            "Basic Information",
            {"fields": ("title", "description", "image", "link", "github_link")},
        ),
        (
            "Skills",
            {
                "fields": ("skills",),
                "description": "Select the skills used in this project",
            },
        ),
    )

    def display_skills(self, obj):
        return ", ".join([skill.name for skill in obj.skills.all()])

    display_skills.short_description = "Skills"


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "subject", "sent_at")
    search_fields = ("name", "email")
    readonly_fields = ("sent_at",)
    list_filter = ("sent_at",)
