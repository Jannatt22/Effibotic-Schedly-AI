import React from 'react';
import '../css/Benefits.css';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Save Time",
      description: "Reduce scheduling time by up to 80% with AI-powered automation.",
      icon: "⏰"
    },
    {
      title: "Boost Productivity",
      description: "Eliminate scheduling conflicts and focus on what matters most.",
      icon: "📈"
    },
    {
      title: "Improve Communication",
      description: "Keep everyone in sync with smart notifications and updates.",
      icon: "💬"
    },
    {
      title: "Data-Driven Insights",
      description: "Make informed decisions with detailed analytics and reports.",
      icon: "📊"
    }
  ];

  return (
    <section id="benefits" className="benefits-section">
      <h2>Why Choose Scheduly AI?</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection; 