import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { ROUTES } from '../../constants/routes';
import './MobileActionBar.css';

export const MobileActionBar = () => {
  const location = useLocation();

  // Hide the bar if we are on the Connect page
  if (location.pathname === ROUTES.CONNECT) {
    return null;
  }

  return (
    <div className="mobile-action-bar">
      <div className="mobile-action-container">
        <a href="tel:+919420776484" className="mobile-action-btn mobile-call-btn">
          <Phone size={18} />
          <span>Call Now</span>
        </a>
        <Link to={ROUTES.CONNECT} className="mobile-action-btn mobile-estimate-btn">
          <span>Get Estimate</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};
