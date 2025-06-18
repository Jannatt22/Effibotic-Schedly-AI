import React from 'react';

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
          <a href="/">
            <img src="/logo_new.png" alt="Scheduly AI" className="logo-image" />
          </a>
        </div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="#products">Products</a>
          <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer">Book Demo</a>
          <a href="#contact">Contact</a>
        </nav>
        {/* Show login button and hamburger in a flex row on mobile */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href="#login"
            className={`cta-button${isMobile ? ' mobile' : ''}`}
            style={isMobile ? { marginRight: '1rem' } : {}}
          >
            Login
          </a>
          {/* Hamburger Menu */}
          <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <nav className="mobile-nav-links">
            <a href="/" onClick={toggleMenu}>Home</a>
            <a href="#products" onClick={toggleMenu}>Products</a>
            <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Book Demo</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
            <a href="#login" onClick={toggleMenu}>Login</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation; 