import React from 'react';
import '../../components/css/Hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Transforming Clinical Practice with AI</h1>
        <p>Transforming clinical practices with cutting-edge AI solutions for automation, efficiency, and enhanced patient care.</p>
        <div className="hero-buttons">
          <a href="https://calendly.com/siva-effibotic/30min?month=2025-06" target="_blank" rel="noopener noreferrer" className="cta-button">Book Demo</a>
          <a href="#learn-more" className="secondary-button">Learn More</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/image-1.jpg" alt="AI Scheduling Interface" className="feature-image" />
      </div>
    </section>
  );
};

export default HeroSection; 