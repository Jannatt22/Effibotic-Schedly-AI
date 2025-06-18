import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-company">
          <img src="/images/logo_new.png" alt="Scheduly AI" className="footer-logo logo-image" />
          <p className="company-description">
            Scheduly AI is transforming clinical practices with cutting-edge AI solutions for automation, efficiency, and enhanced patient care.
          </p>
          <div className="bhiv-section">
            <div className="bhiv-box">
              <img src="/images/BHiveLogo.png" alt="BHIV" className="bhiv-logo" />
              <p className="bhiv-text">Backed by BHIV</p>
            </div>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-details">
            <div className="contact-group">
              <span className="contact-icon">📧</span>
              <div className="contact-info">
                <a href="mailto:siva@effibotic.com">siva@effibotic.com</a>
                <a href="mailto:rupendra@effibotic.com">rupendra@effibotic.com</a>
              </div>
            </div>
            <div className="contact-group">
              <span className="contact-icon">📞</span>
              <div className="contact-info">
                <a href="tel:+16477242624">+1 (647) 724-2624</a>
                <a href="tel:+12899860990">+1 (289) 986-0990</a>
              </div>
            </div>
            <div className="contact-group">
              <span className="contact-icon">📍</span>
              <div className="contact-info">
                <address>
                  8 Nelson St W,<br />
                  Brampton, ON L6X 1B7
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} Scheduly AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 