import React from 'react';
import '../css/Benefits.css';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "24/7 Availability",
      description: "Engage patients and leads around the clock without adding extra staff.",
      icon: "🕒"
    },
    {
      title: "Seamless Integration",
      description: "Connect effortlessly with your existing systems like EHR, CRM, and calendars.",
      icon: "🔗"
    },
    {
      title: "Cost Savings",
      description: "Reduce administrative overhead and operational costs with automation.",
      icon: "💰"
    },
    {
      title: "Scale Faster",
      description: "Handle more patients and leads without sacrificing service quality.",
      icon: "🚀"
    }
  ];

  return (
    <section id="benefits" className="benefits-section">
      <h2>Why Choose Schedly AI?</h2>
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