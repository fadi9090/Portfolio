import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            🐙
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            🔗
          </a>
          <a href="mailto:fadi@example.com" target="_blank" rel="noopener noreferrer">
            ✉️
          </a>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button onClick={scrollToTop} className="back-to-top">
            ↑ Back to Top
          </button>
        </div>
        <p>&copy; {currentYear} <strong>Fadi Aldawoud</strong>. All rights reserved.</p>
        <p>Built with React & Django by <strong>Fadi Aldawoud</strong></p>
      </div>
    </footer>
  );
}

export default Footer;