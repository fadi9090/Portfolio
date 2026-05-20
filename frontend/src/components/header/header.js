import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>Fadi Aldawoud</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
}

export default Header;