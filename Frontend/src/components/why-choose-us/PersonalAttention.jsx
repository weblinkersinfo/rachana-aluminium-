import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import './PersonalAttention.css';

export const PersonalAttention = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section className="section pa-section" id="personal-attention">
      <div className="container">
        <div ref={ref} className={`pa-grid reveal ${isRevealed ? 'is-revealed' : ''}`}>
          <div className="pa-content">
            <p className="pa-eyebrow">Personal Attention</p>
            <h2 className="pa-title">Every Project Receives Personal Attention</h2>
            <p className="pa-text">
              We believe homes and projects are deeply personal investments.
            </p>
            <p className="pa-text">
              That is why we prefer understanding our customers, discussing requirements in detail, and helping them make informed decisions.
            </p>
            <p className="pa-text">
              Whenever possible, customers are encouraged to visit our showroom and experience the products personally.
            </p>

            <div className="pa-quote">
              <p className="pa-quote-text">
                "We treat every project as if we were building it for ourselves."
              </p>
            </div>
          </div>

          <div className="pa-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
              alt="A beautifully completed residential project with aluminium systems"
              className="pa-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
