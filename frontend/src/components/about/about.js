import './about.css';

function About() {
  const achievements = [
    { value: "15+", label: "Projects Completed", icon: "🚀" },
    { value: "8+", label: "Happy Clients", icon: "😊" },
    { value: "5+", label: "Years Experience", icon: "💼" },
    { value: "2000+", label: "Hours of Code", icon: "⚡" }
  ];

  const personalInfo = [
    { icon: "🎓", label: "Education", value: "Computer Science, Cloud Computing" },
    { icon: "💻", label: "Specialties", value: "React, Django, Salesforce" },
    { icon: "🌍", label: "Location", value: "Available Worldwide" },
    { icon: "🎯", label: "Focus", value: "Full Stack & Enterprise Solutions" }
  ];

  return (
    <section className="about">
      <div className="about-header">
        <h2>About Me</h2>
        <p className="about-tagline">Get to know the developer behind the code</p>
      </div>
      
      <div className="about-grid">
        {/* Left Column - Bio & Personal Info */}
        <div className="about-left">
          <div className="bio">
            <p>
              I'm a passionate <strong>Full Stack Developer</strong> and <strong>Salesforce Specialist</strong> 
              with over 5 years of experience building web applications that make a difference. 
              I love solving complex problems with elegant code and creating seamless user experiences.
            </p>
            <p className="mt-1">
              My journey in tech started with a curiosity for how things work, and that curiosity 
              has driven me to master multiple technologies and deliver high-quality solutions 
              for clients worldwide.
            </p>
          </div>
          
          <div className="info-cards">
            {personalInfo.map((info, idx) => (
              <div key={idx} className="info-card">
                <span className="info-icon">{info.icon}</span>
                <div className="info-content">
                  <h4>{info.label}</h4>
                  <p>{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column - Stats & Achievements */}
        <div className="about-right">
          <div className="stats-grid">
            {achievements.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="quote-box">
            <p className="quote-text">
              "Code is not just about functionality — it's about creating experiences 
              that users love and remember."
            </p>
            <p className="quote-author">— Fadi Aldawoud</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;