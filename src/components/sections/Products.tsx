import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Products.css';

// TypeScript interfaces
interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Product Card Component
const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, icon, features }) => {
  return (
    <div className="main-product-card">
      <div className="main-product-header">
        <div className="main-product-icon">{icon}</div>
        <h3 className="main-product-title">{title}</h3>
      </div>
      <p className="main-product-description">{description}</p>
      <Link to={`/product/${id}`} className="main-product-cta">
        Learn More
      </Link>
    </div>
  );
};

// Products Section Component
const ProductsSection = () => {
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const productCards = productsRef.current?.querySelectorAll('.main-product-card');
    productCards?.forEach((card) => observer.observe(card));

    return () => {
      productCards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

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
      description: "Real-time emergency call management system that prioritizes urgent cases, provides immediate assistance, and ensures proper emergency response.",
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
        "24/7 patient support",
        "Inquiry handling",
        "Appointment management",
        "Information assistance"
      ]
    }
  ];

  return (
    <section id="products" className="main-products-section">
      <h2 className="main-products-title">Our Products</h2>
      <div className="main-products-grid" ref={productsRef}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection; 