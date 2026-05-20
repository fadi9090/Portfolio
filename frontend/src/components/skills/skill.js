import { useState, useEffect, useMemo } from 'react';
import './skill.css';
import { getSkills } from '../../services/api';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      const data = await getSkills();
      
      // Handle both paginated and non-paginated responses
      if (data && data.results) {
        setSkills(data.results);
      } else if (Array.isArray(data)) {
        setSkills(data);
      } else {
        setSkills([]);
      }
      
      setError(null);
    } catch (err) {
      setError('Failed to load skills');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Group skills by category
  const groupedSkills = useMemo(() => {
    if (!skills.length) return {};
    
    return skills.reduce((groups, skill) => {
      const category = skill.category || 'other';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(skill);
      return groups;
    }, {});
  }, [skills]);

  const categoryNames = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    salesforce: 'Salesforce',
    tools: 'Tools & DevOps',
    other: 'Skills'
  };

  // Function to determine bar color based on percentage
  const getProgressColor = (percentage) => {
    if (percentage >= 90) return 'linear-gradient(90deg, #00ff00, #3ed403)';
    if (percentage >= 70) return 'linear-gradient(90deg, #7cfc00, #3ed403)';
    if (percentage >= 50) return 'linear-gradient(90deg, #a0ff40, #7cfc00)';
    return 'linear-gradient(90deg, #c0ff80, #a0ff40)';
  };

  if (loading) {
    return (
      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="loading">Loading skills...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="error">{error}</div>
      </section>
    );
  }

  if (!skills.length) {
    return (
      <section className="skills">
        <h2>Technical Skills</h2>
        <p>No skills available. Please add skills in the admin panel.</p>
      </section>
    );
  }

  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-categories">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="skill-category">
            <h3>{categoryNames[category] || category}</h3>
            {categorySkills.map((skill) => (
              <div key={skill.id} className="skill-item">
                <span className="skill-icon">{skill.icon || '📌'}</span>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: `${skill.proficiency}%`,
                      background: getProgressColor(skill.proficiency)
                    }}
                  >
                    {/* Show percentage inside bar for skills above 70% */}
                    {skill.proficiency >= 70 && (
                      <span style={{ 
                        position: 'absolute', 
                        right: '5px', 
                        fontSize: '0.65rem',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        {skill.proficiency}%
                      </span>
                    )}
                  </div>
                </div>
                {/* Show percentage outside for skills below 70% */}
                {skill.proficiency < 70 && (
                  <span className="skill-percentage">{skill.proficiency}%</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;