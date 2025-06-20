import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';
import Footer from '../../components/layout/Footer';

interface ProductMetrics {
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  icon: string;
}

const productData: Record<string, ProductMetrics> = {
  'ai-claim-processor': {
    title: 'AI Claim Processor',
    description: 'Transform your claims processing with our advanced AI solution that automates data extraction, validation, and submission.',
    metrics: [
      {
        label: 'Cost Savings',
        value: '$15,000',
        description: 'Average annual savings per practice by reducing manual processing'
      },
      {
        label: 'Processing Time',
        value: '70%',
        description: 'Reduction in claims processing time'
      },
      {
        label: 'Accuracy Rate',
        value: '99.9%',
        description: 'Claim data accuracy, eliminating costly errors'
      }
    ],
    icon: '📄'
  },
  'ai-insurance-verifier': {
    title: 'AI Insurance Verifier',
    description: 'Streamline insurance verification with real-time coverage confirmation and automated eligibility checks.',
    metrics: [
      {
        label: 'Time Saved',
        value: '45 min',
        description: 'Per verification, reduced from hours to seconds'
      },
      {
        label: 'Cost Reduction',
        value: '$8,000',
        description: 'Annual savings on verification staff'
      },
      {
        label: 'Verification Rate',
        value: '100%',
        description: 'Of insurance verifications completed before appointments'
      }
    ],
    icon: '📋'
  },
  'ai-scheduler': {
    title: 'AI Scheduler',
    description: 'Optimize your practice schedule with intelligent appointment management and automated scheduling.',
    metrics: [
      {
        label: 'Staff Savings',
        value: '$36,000',
        description: 'Annual savings by eliminating receptionist position'
      },
      {
        label: 'No-Show Reduction',
        value: '40%',
        description: 'Decrease in missed appointments'
      },
      {
        label: 'Scheduling Time',
        value: '24/7',
        description: 'Automated scheduling availability'
      }
    ],
    icon: '📅'
  },
  'ai-recall-manager': {
    title: 'AI Recall Manager',
    description: 'Enhance patient follow-up with automated recall tracking and personalized reminder system.',
    metrics: [
      {
        label: 'Recall Success',
        value: '85%',
        description: 'Increase in patient recall response rate'
      },
      {
        label: 'Time Saved',
        value: '20 hrs',
        description: 'Monthly staff time saved on follow-ups'
      },
      {
        label: 'Revenue Impact',
        value: '+25%',
        description: 'Increase in follow-up appointment revenue'
      }
    ],
    icon: '🔔'
  },
  'ai-emergency-handler': {
    title: 'AI Emergency Handler',
    description: 'Ensure proper emergency response with 24/7 intelligent call management and prioritization.',
    metrics: [
      {
        label: 'Response Time',
        value: '< 30 sec',
        description: 'Average emergency call response time'
      },
      {
        label: 'Cost Savings',
        value: '$12,000',
        description: 'Annual savings on after-hours staffing'
      },
      {
        label: 'Patient Satisfaction',
        value: '98%',
        description: 'Satisfaction rate with emergency handling'
      }
    ],
    icon: '🚨'
  },
  'ai-virtual-assistant': {
    title: 'AI Virtual Assistant',
    description: 'Provide comprehensive patient support with an intelligent virtual assistant available 24/7.',
    metrics: [
      {
        label: 'Call Volume',
        value: '80%',
        description: 'Of routine calls handled automatically'
      },
      {
        label: 'Cost Efficiency',
        value: '$24,000',
        description: 'Annual savings on front desk staff'
      },
      {
        label: 'Response Time',
        value: 'Instant',
        description: 'Response to common patient inquiries'
      }
    ],
    icon: '🤖'
  }
};

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productData[productId] : null;

  if (!product) {
    return (
      <div className="product-detail-container">
        <h1>Product Not Found</h1>
        <Link to="/#products" className="back-button">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-header">
        <span className="product-icon">{product.icon}</span>
        <h1>{product.title}</h1>
      </div>
      <p className="product-description">{product.description}</p>
      
      <div className="metrics-grid">
        {product.metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <h3>{metric.label}</h3>
            <div className="metric-value">{metric.value}</div>
            <p>{metric.description}</p>
          </div>
        ))}
      </div>

      <Link to="/#products" className="back-button">Back to Products</Link>
      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-company">
            <img src="/images/logo_new.png" alt="Scheduly AI" className="footer-logo logo-image" />
            <p className="company-description">
              Scheduly AI is transforming clinical practices with cutting-edge AI solutions for automation, efficiency, and enhanced patient care.
            </p>
            <div className="bhiv-section">
              <div className="bhiv-box">
                <img src="/images/BHiveLogo.png" alt="BHIVE" className="bhiv-logo" />
                <p className="bhiv-text">Backed by BHIVE</p>
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
    </div>
  );
};

export default ProductDetail; 