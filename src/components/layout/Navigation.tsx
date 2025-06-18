import React from 'react';
import '../../components/css/Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="logo">
          <a href="/" className="logo-link">
            <img src="/logo_new.png" alt="Scheduly AI" className="logo-image" />
          </a>
        </div>
        <nav className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer" className="nav-link">Book Demo</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="nav-actions">
          <a
            href="#login"
            className={`cta-button ${isMobile ? 'mobile' : ''}`}
            style={isMobile ? { marginRight: '1rem' } : {}}
          >
            Login
          </a>
          <div 
            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div 
          className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}
        >
          <nav className="mobile-nav-links">
            <a href="/" onClick={toggleMenu} className="nav-link">Home</a>
            <a href="#products" onClick={toggleMenu} className="nav-link">Products</a>
            <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="nav-link">Book Demo</a>
            <a href="#contact" onClick={toggleMenu} className="nav-link">Contact</a>
            <a href="#login" onClick={toggleMenu} className="nav-link">Login</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation; 