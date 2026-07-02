import React from 'react';
import './CompanyIntro.css';

export const CompanyIntro = () => {
  return (
    <section className="section company-intro-section">
      <div className="container">
        <div className="company-intro-grid">
          <div className="company-intro-image-col">
            <div className="company-intro-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
                alt="Rachana Aluminium project — large aluminium window installation"
                className="company-intro-image"
                loading="lazy"
              />
              <div className="company-intro-image-badge">Est. 2012</div>
            </div>
          </div>

          <div className="company-intro-text-col">
            <p className="company-intro-eyebrow">Our Story</p>
            <h2 className="section-heading">Built on Craftsmanship<br />and Relationships</h2>
            <div className="company-intro-divider"></div>
            <p className="company-intro-body">
              Rachana Aluminium has grown through years of dedication to quality workmanship and trusted customer relationships.
            </p>
            <p className="company-intro-body">
              From residential homes to large commercial projects, every project is approached with care, precision, and attention to detail.
            </p>
            <p className="company-intro-statement">
              We continue to believe that long-term relationships are built through honest work and consistent quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
