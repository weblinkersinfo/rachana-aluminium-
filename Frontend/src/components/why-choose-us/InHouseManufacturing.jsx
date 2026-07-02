import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import './InHouseManufacturing.css';

export const InHouseManufacturing = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section className="section ihm-section" id="in-house-manufacturing">
      <div className="container">
        <div ref={ref} className={`ihm-grid reveal ${isRevealed ? 'is-revealed' : ''}`}>
          <div className="ihm-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
              alt="In-house precision manufacturing at Rachana Aluminium workshop"
              className="ihm-image"
              loading="lazy"
            />
          </div>

          <div className="ihm-content">
            <p className="ihm-eyebrow">In-House Manufacturing</p>
            <h2 className="ihm-title">Precision Begins in Our Workshop</h2>
            <p className="ihm-text">
              Approximately 90% of our work is completed through carefully managed in-house manufacturing processes.
            </p>
            <p className="ihm-text">
              From precision cutting and fabrication to assembly and quality checks, maintaining control over the process allows us to deliver consistent quality and accountability.
            </p>
            <div className="ihm-badge">
              <span className="ihm-badge-num">90%</span>
              <span className="ihm-badge-text">In-House Manufacturing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
