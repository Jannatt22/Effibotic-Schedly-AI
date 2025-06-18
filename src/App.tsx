import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';
import Navigation from './components/layout/Navigation';
import HeroSection from './components/sections/Hero';
import ProductsSection from './components/sections/Products';
import BenefitsSection from './components/sections/Benefits';
import TestimonialsSection from './components/sections/Testimonials';
import Footer from './components/layout/Footer';

// Product Detail Page Component
const ProductDetail = () => {
  const { productId } = useParams();
  const products = [
    {
      id: "ai-claim-processor",
      title: "AI Claim Processor",
      description: "Automatically extract, validate, and submit insurance claims data with 99.9% accuracy. Reduce processing time by 70% and eliminate manual errors.",
      icon: "📄",
      features: [
        "Automated data extraction",
        "99.9% accuracy rate",
        "70% faster processing",
        "Error elimination"
      ]
    },
    {
      id: "ai-insurance-verifier",
      title: "AI Insurance Verifier",
      description: "Real-time insurance verification with instant coverage confirmation. Reduce verification time from hours to seconds while maintaining accuracy.",
      icon: "📋",
      features: [
        "Real-time verification",
        "Instant coverage confirmation",
        "Seconds-level processing",
        "High accuracy maintenance"
      ]
    },
    {
      id: "ai-scheduler",
      title: "AI Scheduler",
      description: "Intelligent appointment scheduling system that optimizes your calendar, reduces no-shows by 40%, and handles scheduling 24/7.",
      icon: "📅",
      features: [
        "Calendar optimization",
        "40% no-show reduction",
        "24/7 scheduling",
        "Smart time slot allocation"
      ]
    },
    {
      id: "ai-recall-manager",
      title: "AI Recall Manager",
      description: "Automated patient recall system that tracks follow-ups, sends personalized reminders, and ensures timely patient care coordination.",
      icon: "🔔",
      features: [
        "Automated follow-up tracking",
        "Personalized patient reminders",
        "Care coordination",
        "EHR Integration"
      ]
    },
    {
      id: "ai-emergency-handler",
      title: "AI Emergency Handler",
      description: "24/7 emergency call management system that prioritizes urgent cases, provides immediate assistance, and ensures proper emergency response.",
      icon: "🚨",
      features: [
        "Real-time emergency management",
        "Urgent case prioritization",
        "Immediate assistance",
        "Emergency response coordination"
      ]
    },
    {
      id: "ai-virtual-assistant",
      title: "AI Virtual Assistant",
      description: "Comprehensive virtual assistant that handles patient inquiries, appointment confirmations, and general information requests around the clock.",
      icon: "🤖",
      features: [
        "Automated patient support",
        "Smart inquiry handling",
        "Appointment management",
        "Instant information assistance"
      ]
    }
  ];

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="product-detail">
        <h1>Product Not Found</h1>
        <p>The requested product could not be found.</p>
        <Link to="/" className="cta-button">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-detail-header">
        <div className="product-detail-icon">{product.icon}</div>
        <h1>{product.title}</h1>
      </div>
      <p className="product-detail-description">{product.description}</p>
      <div className="product-detail-features">
        <h2>Key Features</h2>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <Link to="/" className="cta-button">Back to Products</Link>
    </div>
  );
};

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
