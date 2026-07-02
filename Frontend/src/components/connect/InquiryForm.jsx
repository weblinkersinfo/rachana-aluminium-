import React, { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import './InquiryForm.css';

export const InquiryForm = () => {
  const { ref, isRevealed } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target['iq-name'].value,
      phone: e.target['iq-phone'].value,
      email: e.target['iq-email'].value,
      location: e.target['iq-location'].value,
      message: e.target['iq-message'].value,
    };

    try {
      const response = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Failed to submit inquiry');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section iq-section" id="inquiry-form">
      <div className="container">
        <div ref={ref} className={`iq-wrapper reveal ${isRevealed ? 'is-revealed' : ''}`}>
          <div className="iq-header">
            <span className="section-eyebrow small-label" style={{ color: 'var(--accent-primary)' }}>
              Inquiry
            </span>
            <h2 className="section-heading" style={{ marginTop: 'var(--space-xs)' }}>
              Tell Us About Your Project
            </h2>
            <p className="iq-supporting">
              Share your requirements and our team will get in touch to understand your project better.
            </p>
          </div>

          {submitted ? (
            <div className="iq-success">
              <div className="iq-success-icon">
                <CheckCircle size={32} />
              </div>
              <h3 className="iq-success-title">Thank You</h3>
              <p className="iq-success-text">
                We've received your inquiry. Our team will get in touch with you shortly.
              </p>
            </div>
          ) : (
            <form className="iq-form" onSubmit={handleSubmit}>
              <div className="iq-field">
                <label className="iq-label" htmlFor="iq-name">
                  Full Name <span className="iq-required">*</span>
                </label>
                <input
                  type="text"
                  id="iq-name"
                  className="iq-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="iq-field">
                <label className="iq-label" htmlFor="iq-phone">
                  Phone Number <span className="iq-required">*</span>
                </label>
                <input
                  type="tel"
                  id="iq-phone"
                  className="iq-input"
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div className="iq-field">
                <label className="iq-label" htmlFor="iq-email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="iq-email"
                  className="iq-input"
                  placeholder="Your email address"
                />
              </div>

              <div className="iq-field">
                <label className="iq-label" htmlFor="iq-location">
                  Project Location
                </label>
                <input
                  type="text"
                  id="iq-location"
                  className="iq-input"
                  placeholder="City or area of your project"
                />
              </div>

              <div className="iq-field">
                <label className="iq-label" htmlFor="iq-message">
                  Message
                </label>
                <textarea
                  id="iq-message"
                  className="iq-textarea"
                  placeholder="Tell us about your project requirements, timelines, or any questions you have"
                ></textarea>
              </div>

              <div className="iq-submit">
                <Button variant="primary" loading={loading}>
                  Connect With Us
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
