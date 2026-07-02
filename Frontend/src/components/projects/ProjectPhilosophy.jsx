import React from 'react';
import './ProjectPhilosophy.css';

export const ProjectPhilosophy = () => {
  return (
    <section className="section phil-section bg-secondary">
      <div className="container">
        <div className="phil-grid">
          {/* Image */}
          <div className="phil-image-col">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
              alt="Craftsmen at work in the Rachana Aluminium workshop"
              className="phil-image"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="phil-text-col">
            <p className="phil-eyebrow">Our Philosophy</p>
            <h2 className="section-heading">Every Project Deserves<br />Personal Attention.</h2>
            <div className="phil-divider"></div>
            <p className="phil-body">
              We believe every home, commercial building, and institution carries its own purpose and emotions. Every project receives our full attention, careful planning, and commitment to quality.
            </p>
            <blockquote className="phil-quote">
              "We treat every project as if we were building it for ourselves."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
