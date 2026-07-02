import React from 'react';
import { statistics } from '../../data/siteData';
import { useReveal } from '../../hooks/useReveal';
import './TrustIndicators.css';

export const TrustIndicators = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section 
      ref={ref} 
      className={`trust-indicators section-padding reveal ${isRevealed ? 'is-revealed' : ''}`}
    >
      <div className="container">
        <div className="trust-grid">
          {statistics.map((item, index) => (
            <div key={index} className="trust-item reveal-stagger">
              <div className="trust-number display-heading">{item.number}</div>
              <div className="trust-label small-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
