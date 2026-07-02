import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useReveal } from '../../hooks/useReveal';
import './ConnectFinalCTA.css';

export const ConnectFinalCTA = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section className="cfcta-section" id="connect-final-cta">
      <div className="container">
        <div ref={ref} className={`cfcta-content reveal ${isRevealed ? 'is-revealed' : ''}`}>
          <h2 className="cfcta-title">Let's Build Something Meaningful Together</h2>
          <p className="cfcta-desc">
            Every project deserves thoughtful decisions and personal attention. We'd be delighted to understand your requirements and explore the possibilities together.
          </p>
          <div className="cfcta-actions">
            <a href="#visit-showroom" className="cfcta-secondary-link">
              Plan Your Visit <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
