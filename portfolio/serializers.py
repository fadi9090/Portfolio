from rest_framework import serializers
from .models import Project, Skill, Contact


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ["id", "name", "proficiency", "icon", "category"]


class ProjectSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    image_url = serializers.SerializerMethodField()
    skill_ids = serializers.PrimaryKeyRelatedField(
        many=True,
        write_only=True,
        queryset=Skill.objects.all(),
        source="skills",
        required=False,
    )

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "description",
            "image",
            "image_url",
            "link",
            "github_link",
            "skills",
            "skill_ids",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]

    def get_image_url(self, obj):
        """Return the full URL of the image"""
        if obj.image:
            request = self.context.get("request")
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ["id", "name", "email", "subject", "message", "sent_at"]
        read_only_fields = ["id", "sent_at"]
