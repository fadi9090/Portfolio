import './about.css';

function About() {
  const achievements = [
    { value: "2+", label: "Years Experience", icon: "💼" },
    { value: "15+", label: "Projects Delivered", icon: "🚀" },
    { value: "10+", label: "Salesforce Solutions", icon: "☁️" },
    { value: "6+", label: "Go Microservices", icon: "🐹" }
  ];

  const personalInfo = [
    { icon: "☁️", label: "Salesforce", value: "Enterprise CRM & Custom Solutions" },
    { icon: "🐹", label: "Golang", value: "Web Services & Microservices" },
    { icon: "🌍", label: "Location", value: "Available Worldwide" },
    { icon: "⚡", label: "Philosophy", value: "Clean Code · Scalable Systems" }
  ];

  return (
    <section className="about">
      <div className="about-header">
        <h2>About Me</h2>
        <p className="about-tagline">Salesforce Developer · Go Microservices Architect</p>
      </div>
      
      <div className="about-grid">
        <div className="about-left">
          <div className="bio">
            <p>
              I'm a <strong>Salesforce Developer</strong> with expertise in enterprise CRM 
              solutions, custom applications, and business process automation.
            </p>
            <p>
              I'm also a <strong>Go (Golang) Developer</strong> specializing in building 
              high-performance web services and scalable microservices architectures.
            </p>
            <p className="mt-1">
              With 2+ years of professional experience across both domains, I deliver 
              clean, maintainable code and scalable solutions that drive business value.
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
              "Salesforce for enterprise solutions. Go for backend performance. 
              Two specializations, one focus on quality."
            </p>
            <p className="quote-author">— Fadi Aldawoud</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;