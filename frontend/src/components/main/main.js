import { useEffect } from 'react';
import './main.css';
import About from '../about/about';
import Projects from '../projects/project';
import Skills from '../skills/skill';
import Contact from '../contact/contact';

function Main() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    const handleAnchorClick = function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };
    
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    // Cleanup event listeners on component unmount
    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToExplore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge">👋 Welcome to my portfolio</span>
          </div>
          <h1>
            Hi, I'm <span className="highlight">Fadi Aldawoud</span>
          </h1>
          <h2>Full Stack & Salesforce Developer</h2>
          <p>Building amazing web experiences with React, Django & Salesforce</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToProjects}>
              View My Work
              <span className="btn-icon">→</span>
            </button>
            <button className="btn-secondary" onClick={scrollToContact}>
              Contact Me
              <span className="btn-icon">✉️</span>
            </button>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="explore">
        <div className="explore-content">
          <h2>Explore My Journey</h2>
          <p>Discover what I do, the technologies I work with, and how I can help bring your ideas to life.</p>
          <div className="explore-cards">
            <div className="explore-card" onClick={scrollToProjects}>
              <div className="explore-icon">💼</div>
              <h3>My Projects</h3>
              <p>View real-world applications I've built</p>
              <span className="explore-link">View Projects →</span>
            </div>
            <div className="explore-card" onClick={scrollToExplore}>
              <div className="explore-icon">👨‍💻</div>
              <h3>About Me</h3>
              <p>Learn more about my background and skills</p>
              <span className="explore-link">Learn More →</span>
            </div>
            <div className="explore-card" onClick={scrollToContact}>
              <div className="explore-icon">📧</div>
              <h3>Get in Touch</h3>
              <p>Let's work together on your next project</p>
              <span className="explore-link">Contact Me →</span>
            </div>
          </div>
        </div>
      </section>
      
      <section id="about" className="section-container">
        <About />
      </section>
      
      <section id="projects" className="section-container">
        <Projects />
      </section>
      
      <section id="skills" className="section-container">
        <Skills />
      </section>
      
      <section id="contact" className="section-container">
        <Contact />
      </section>
    </>
  );
}

export default Main;