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
      text: '"Our patient communication has been transformed by the AI Chatbot. It handles over 80% of routine inquiries—like appointment scheduling and FAQs—instantly. The 24/7 support and multilingual capabilities have significantly improved patient satisfaction."',
      author: "Dr. Mark Bennett",
      role: "Clinic Owner",
      rating: 5
    },
    {
      text: '"The AI Lead Generator has completely changed how we attract and qualify new patients. It identifies high-quality leads and follows up automatically, which has increased our bookings by 45%. It’s like having an extra staff member working around the clock."',
      author: "Dr. James Lee",
      role: "Clinic Owner",
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