import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { CheckCircle2 } from 'lucide-react';
import './ManufacturingStory.css';

const highlights = [
  'Precision Cutting',
  'Fabrication & Assembly',
  'Glass & Hardware Fitting',
  'Quality Inspection',
  'Packaging',
];

export const ManufacturingStory = () => {
  return (
    <section className="section mfg-section">
      <div className="container">
        <div className="mfg-grid">
          <div className="mfg-text-content">
            <h2 className="section-heading">Built with Precision</h2>
            <p className="mfg-sub">
              Nearly every stage of production is completed under our supervision.
            </p>
            
            <div className="mfg-highlights">
              {highlights.map((item, index) => {
                const { ref, isRevealed } = useReveal();
                return (
                  <div 
                    key={item} 
                    ref={ref}
                    className={`mfg-highlight-item ${isRevealed ? 'revealed' : ''}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle2 size={24} className="mfg-highlight-icon" />
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mfg-side-content">
            <div className="mfg-images-grid">
              <div className="mfg-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="Precision Manufacturing"
                  className="mfg-side-image"
                />
              </div>
              <div className="mfg-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" 
                  alt="Workshop gallery"
                  className="mfg-side-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
