import React from 'react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import './ConnectCTA.css';

export const ConnectCTA = ({
  title = "Let's Find The Right System For Your Project.",
  description = "Visit our showroom or connect with our team for guidance, recommendations, and a free site visit and measurement.",
}) => {
  return (
    <section className="section connect-cta-section bg-dark">
      <div className="container">
        <div className="connect-cta-content">
          <h2 className="connect-cta-title">{title}</h2>
          <p className="connect-cta-desc">{description}</p>
          <div className="connect-cta-action" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to={ROUTES.CONNECT}>
              <Button variant="secondary">Connect With Us</Button>
            </Link>
            <Link to={ROUTES.CONNECT}>
              <Button variant="outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>Plan Your Visit</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
