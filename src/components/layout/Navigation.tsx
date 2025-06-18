import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../components/css/Navigation.css';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Effibotic Scheduly AI" className="logo-image" />
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Link to="/login" className="cta-button">
          Login
        </Link>
      </div>

      <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-links">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/features" onClick={toggleMenu}>Features</Link>
          <Link to="/pricing" onClick={toggleMenu}>Pricing</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          <Link to="/login" className="cta-button mobile" onClick={toggleMenu}>
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation; 