import React from 'react';
import { Link } from 'react-router-dom';
import { navigation, contactInfo } from '../../data/siteData';
import { ROUTES } from '../../constants/routes';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <Link to={ROUTES.HOME} className="footer-logo">
              <img src="/images/logo white.png" alt="Rachana Aluminium Logo" className="footer-logo-image" />
            </Link>
            <p className="footer-tagline subheading">Quality at its Best</p>
          </div>

          <div className="footer-links-col">
            <h4 className="small-label footer-col-title">Quick Links</h4>
            <ul className="footer-list">
              {navigation.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="small-label footer-col-title">Our Office</h4>
            <p className="footer-text">
              <a href={contactInfo.office.mapLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '8px' }}>
                {contactInfo.office.address.split(', ').map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}{i !== arr.length - 1 && ','}<br/>
                  </React.Fragment>
                ))}
              </a>
            </p>
            
            <h4 className="small-label footer-col-title" style={{marginTop: '24px'}}>Workshops</h4>
            <ul className="footer-list">
              {contactInfo.workshops.map((workshop, i) => (
                <li key={i}>{workshop}</li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="small-label footer-col-title">Contact</h4>
            <ul className="footer-list">
              {contactInfo.phones.map((phone, i) => (
                <li key={i}><a href={`tel:${phone.tel}`}>{phone.number} ({phone.name})</a></li>
              ))}
              <li><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', paddingTop: '32px' }}>
          <p className="small-label">&copy; {new Date().getFullYear()} Rachana Aluminium. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: 0.8 }}>
            <p className="small-label" style={{ color: 'var(--text-tertiary)', margin: 0 }}>Raw materials proudly sourced from</p>
            <img src="/images/Alu_King_logo.png" alt="ALu King Logo" style={{ height: '35px', objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </footer>
  );
};
