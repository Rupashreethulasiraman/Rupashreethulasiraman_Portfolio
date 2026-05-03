import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu(); 
      }
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu(); 
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      
      {/* Logo */}
      <div>
        <h3 className="navbar--logo">RupashreeThulasiraman.</h3>
      </div>
      
      <button 
        className={`nav__hamburger ${navActive ? "active" : ""}`} 
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>
      
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link 
              onClick={closeMenu} 
              activeClass="navbar--active-content" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              to="heroSection" 
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              onClick={closeMenu} 
              activeClass="navbar--active-content" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              to="AboutMe" 
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link 
              onClick={closeMenu} 
              activeClass="navbar--active-content" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              to="projects" 
              className="navbar--content"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              onClick={closeMenu} 
              activeClass="navbar--active-content" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              to="Contact" 
              className="navbar--content"
            >
              Contact
            </Link>
          </li>
          
          {/* Button is now INSIDE the ul, wrapped in an li */}
          <li>
            <a 
              href="/Rupashree_Resume.pdf" 
              download="Rupashree_Resume.pdf" 
              className="navbar--content" 
              style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
            >
              RESUME
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;