import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navigation from './components/layout/Navigation';
import HeroSection from './components/sections/Hero';
import ProductsSection from './components/sections/Products';
import BenefitsSection from './components/sections/Benefits';
import TestimonialsSection from './components/sections/Testimonials';
import Footer from './components/layout/Footer';
import ProductDetail from './learn-more-pages/products/ProductDetail';

// Thank You Page Component
const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <div className="thank-you-content">
        <h1>Thank You for Booking!</h1>
        <p>We're excited to show you how Scheduly AI can transform your practice.</p>
        <p>You'll receive a confirmation email shortly with the meeting details.</p>
        <Link to="/" className="cta-button">Return to Home</Link>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ProductsSection />
                <BenefitsSection />
                <TestimonialsSection />
                <Footer />
              </>
            } />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
