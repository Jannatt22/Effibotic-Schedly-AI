import React from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <header className="sticky top-0 bg-white h-20 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        <div className="h-15 flex items-center pl-4">
          <a href="/" className="h-full flex items-center">
            <img src="/logo_new.png" alt="Scheduly AI" className="h-full w-auto object-contain" />
          </a>
        </div>
        <nav className="hidden md:flex gap-10">
          <a href="/" className="text-text-main font-medium text-xl transition-colors duration-300 hover:text-primary no-underline">Home</a>
          <a href="#products" className="text-text-main font-medium text-xl transition-colors duration-300 hover:text-primary no-underline">Products</a>
          <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium text-xl transition-colors duration-300 hover:text-primary no-underline">Book Demo</a>
          <a href="#contact" className="text-text-main font-medium text-xl transition-colors duration-300 hover:text-primary no-underline">Contact</a>
        </nav>
        <div className="flex items-center">
          <a
            href="#login"
            className={`bg-primary text-white border-none py-3 px-6 rounded-lg font-medium cursor-pointer transition-colors duration-300 hover:bg-accent no-underline inline-block ${
              isMobile ? 'bg-bg-light text-primary border-2 border-primary font-medium py-1.5 px-4 text-sm z-50' : ''
            }`}
            style={isMobile ? { marginRight: '1rem' } : {}}
          >
            Login
          </a>
          <div 
            className={`md:hidden flex flex-col justify-center items-center w-6 h-6 cursor-pointer z-50 ${
              isMenuOpen ? 'active' : ''
            }`}
            onClick={toggleMenu}
          >
            <span className="block w-6 h-0.5 bg-text-main mb-1.5 transition-transform duration-300"></span>
            <span className="block w-6 h-0.5 bg-text-main mb-1.5 transition-transform duration-300"></span>
            <span className="block w-6 h-0.5 bg-text-main transition-transform duration-300"></span>
          </div>
        </div>
        <div 
          className={`fixed top-0 right-0 w-4/5 max-w-[300px] h-screen bg-white p-20 px-8 shadow-lg transition-transform duration-300 z-40 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <nav className="flex flex-col gap-6">
            <a href="/" onClick={toggleMenu} className="text-text-main font-medium text-xl transition-colors duration-300 hover:text-primary no-underline">Home</a>
            <a href="#products" onClick={toggleMenu} className="text-text-main font-medium text-xl transition-colors duration-300 hover:text-primary no-underline">Products</a>
            <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="text-text-main font-medium text-xl transition-colors duration-300 hover:text-primary no-underline">Book Demo</a>
            <a href="#contact" onClick={toggleMenu} className="text-text-main font-medium text-xl transition-colors duration-300 hover:text-primary no-underline">Contact</a>
            <a href="#login" onClick={toggleMenu} className="text-text-main font-medium text-xl transition-colors duration-300 hover:text-primary no-underline">Login</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation; 