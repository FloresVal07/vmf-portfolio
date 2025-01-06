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
          <h1 className="navbar-titlename-firstHalf">Valentin</h1>
          <h1 className="navbar-titlename-secondHalf">M Flores</h1>
        </div>
        <input type="checkbox" id="navbar-toggle" class="navbar-checkbox" />
        <label for="navbar-toggle" class="navbar-toggle-label">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul class="navbar-options">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li>
            <a href="https://github.com/FloresVal07" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
}

export default NavBar;
