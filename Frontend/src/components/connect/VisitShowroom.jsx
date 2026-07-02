import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { Button } from '../ui/Button';
import './VisitShowroom.css';

export const VisitShowroom = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section className="section vs-section" id="visit-showroom">
      <div className="container">
        <div ref={ref} className={`vs-grid reveal ${isRevealed ? 'is-revealed' : ''}`}>
          <div className="vs-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
              alt="Rachana Aluminium showroom with product displays"
              className="vs-image"
              loading="lazy"
            />
          </div>

          <div className="vs-content">
            <p className="vs-eyebrow">Our Showroom</p>
            <h2 className="vs-title">Experience Our Products Before Making Decisions</h2>
            <p className="vs-text">
              We encourage homeowners, builders, architects, and contractors to visit our showroom and experience our products personally.
            </p>
            <p className="vs-text">
              Explore different systems, finishes, and configurations while discussing your requirements with our team.
            </p>
            <p className="vs-text">
              Because every project deserves thoughtful decisions.
            </p>
            <div className="vs-cta">
              <a href="#inquiry-form">
                <Button variant="primary">Plan Your Visit</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
