import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import './BrandPhilosophy.css';

export const BrandPhilosophy = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section 
      ref={ref} 
      className={`brand-philosophy section-padding reveal ${isRevealed ? 'is-revealed' : ''}`}
    >
      <div className="container-text center-text">
        <h2 className="display-heading philosophy-title reveal-stagger">Quality at its Best.</h2>
        <p className="philosophy-statement subheading reveal-stagger">
          We treat every project as if we were building it for ourselves.
        </p>
      </div>
    </section>
  );
};
