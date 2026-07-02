import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Store } from 'lucide-react';
import { Button } from '../ui/Button';
import { ROUTES } from '../../constants/routes';
import './WorkshopsShowroom.css';

export const WorkshopsShowroom = () => {
  return (
    <section className="section ws-section bg-secondary">
      <div className="container">
        <div className="ws-grid">
          {/* Manufacturing Workshops */}
          <div className="ws-card">
            <div className="ws-card-icon">
              <Factory size={32} strokeWidth={1.5} />
            </div>
            <h3 className="ws-card-title">Manufacturing Workshops</h3>
            <p className="ws-card-desc">
              Dedicated workshops equipped for precision cutting, fabrication, assembly, and quality control.
            </p>
          </div>

          {/* Showroom */}
          <div className="ws-card ws-card--highlight">
            <div className="ws-card-icon">
              <Store size={32} strokeWidth={1.5} />
            </div>
            <h3 className="ws-card-title">Showroom Experience</h3>
            <p className="ws-card-desc">
              Our showroom allows customers to experience products, configurations, and finishes before making decisions.
            </p>
            <Link to={ROUTES.CONNECT} className="ws-card-cta">
              <Button variant="primary">Plan Your Visit</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
