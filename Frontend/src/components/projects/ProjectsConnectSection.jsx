import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ROUTES } from '../../constants/routes';
import './ProjectsConnectSection.css';

export const ProjectsConnectSection = () => {
  return (
    <section className="section proj-connect-section bg-dark">
      <div className="container">
        <div className="proj-connect-content">
          <h2 className="proj-connect-title">Let's Discuss Your Project.</h2>
          <p className="proj-connect-desc">
            Visit our showroom or connect with our team to discuss your requirements and explore suitable solutions.
          </p>
          <div className="proj-connect-actions">
            <Link to={ROUTES.CONNECT}>
              <Button variant="secondary">Connect With Us</Button>
            </Link>
            <Link to={ROUTES.CONNECT}>
              <Button variant="primary">Plan Your Visit</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
