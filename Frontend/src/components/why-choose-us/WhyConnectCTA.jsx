import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { ROUTES } from '../../constants/routes';
import { useReveal } from '../../hooks/useReveal';
import './WhyConnectCTA.css';

export const WhyConnectCTA = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section className="wcta-section" id="why-connect-cta">
      <div className="container">
        <div ref={ref} className={`wcta-content reveal ${isRevealed ? 'is-revealed' : ''}`}>
          <h2 className="wcta-title">Let's Discuss Your Project</h2>
          <p className="wcta-desc">
            Whether you are planning a home, a commercial space, or a large project, we would be happy to understand your requirements and guide you.
          </p>
          <div className="wcta-actions">
            <Link to={ROUTES.CONNECT}>
              <Button variant="primary">Connect With Us</Button>
            </Link>
            <Link to={ROUTES.CONNECT} className="wcta-secondary-link">
              Plan Your Visit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
