import { useNavigate } from 'react-router-dom';
import "./NavBar.css";
function NavBar() {
    const navigate = useNavigate();
  
    const handleAnchorClick = (e, path) => {
      e.preventDefault(); // Prevent page reload for internal links
      navigate(path);     // Navigate using React Router
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-title">
          <h1 className="navbar-acronym">VMF</h1>
          <h1 className="navbar-titlename-firstHalf">Valentin Mateo Flores</h1>
        </div>
        <div className="navbar-options">
          <a href="/" onClick={(e) => handleAnchorClick(e, "/")}>Home</a>
          <a href="/about" onClick={(e) => handleAnchorClick(e, "/about")}>About</a>
          <a href="/projects" onClick={(e) => handleAnchorClick(e, "/projects")}>Projects</a>
          <a href="https://github.com/FloresVal07" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/contact" onClick={(e) => handleAnchorClick(e, "/contact")}>Contact</a>
        </div>
      </nav>
    );
}

export default NavBar;
