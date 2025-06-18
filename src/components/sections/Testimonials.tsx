import React from 'react';
import '../css/Testimonials.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: '"The AI Receptionist has revolutionized our practice. It handles appointment scheduling 24/7, reduces no-shows with automated reminders, and our patients love how easy it is to use. We\'ve seen a 30% increase in booking efficiency."',
      author: "Dr. Emily Chen",
      role: "Dental Clinic Owner",
      rating: 5
    },
    {
      text: '"Our customer support has been transformed by the AI Chatbot. It handles over 80% of routine inquiries instantly, provides 24/7 support, and has improved our customer satisfaction scores by 40%. The multilingual support is a game-changer."',
      author: "Mark Thompson",
      role: "E-commerce Director",
      rating: 5
    },
    {
      text: '"The AI Lead Generator has completely transformed our sales process. It not only identifies potential leads but qualifies them with incredible accuracy. Our conversion rates have increased by 45%, and the automated nurturing sequences save our team countless hours."',
      author: "Lisa Rodriguez",
      role: "Sales Manager",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <p className="testimonials-subtitle">Join hundreds of satisfied teams who have transformed their scheduling process</p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-author">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="star-rating">
                {"★".repeat(testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection; 