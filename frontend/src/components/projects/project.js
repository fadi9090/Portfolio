import { useState, useEffect } from 'react';
import './project.css';
import { getProjects } from '../../services/api';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await getProjects();
      
      // Handle both paginated and non-paginated responses
      if (data && data.results) {
        // If API returns paginated response (has results array)
        setProjects(data.results);
      } else if (Array.isArray(data)) {
        // If API returns direct array
        setProjects(data);
      } else {
        setProjects([]);
      }
      
      setError(null);
    } catch (err) {
      setError('Failed to load projects');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="projects">
        <h2>My Projects</h2>
        <div className="loading">Loading projects...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="projects">
        <h2>My Projects</h2>
        <div className="error">{error}</div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section className="projects">
        <h2>My Projects</h2>
        <p>No projects available. Add projects in the admin panel.</p>
      </section>
    );
  }

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              {project.image_url ? (
                <img 
                  src={project.image_url} 
                  alt={project.title}
                  className="project-image-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="image-placeholder">📸</div>';
                  }}
                />
              ) : (
                <div className="image-placeholder">📸</div>
              )}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            {/* Display skills with icons */}
            {project.skills && project.skills.length > 0 && (
              <div className="project-tech">
                {project.skills.map((skill) => (
                  <span key={skill.id} className="tech-tag">
                    {skill.icon || '🔧'} {skill.name}
                  </span>
                ))}
              </div>
            )}
            
            <div className="project-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
              )}
              {project.github_link && (
                <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;