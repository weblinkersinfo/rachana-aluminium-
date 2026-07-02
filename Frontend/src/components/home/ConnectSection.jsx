import React from 'react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useReveal } from '../../hooks/useReveal';
import './ConnectSection.css';

export const ConnectSection = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section 
      ref={ref} 
      className={`connect-section section-padding reveal ${isRevealed ? 'is-revealed' : ''}`}
    >
      <div className="container center-content">
        <h2 className="page-heading connect-title reveal-stagger">Let's Discuss Your Project.</h2>
        <p className="connect-statement reveal-stagger">
          Visit our showroom, explore our products, or connect with our team for a free site visit and measurement.
        </p>
        <div className="connect-action reveal-stagger">
          <Link to={ROUTES.CONNECT}>
            <Button variant="primary" className="connect-round-btn">Connect With Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
