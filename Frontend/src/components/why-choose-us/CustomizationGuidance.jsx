import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { Palette, Layers, Lock, Grid3X3, Settings2, Compass } from 'lucide-react';
import './CustomizationGuidance.css';

const options = [
  { id: 'colors', icon: Palette, title: 'Colors' },
  { id: 'glass', icon: Layers, title: 'Glass Options' },
  { id: 'locks', icon: Lock, title: 'Locks & Handles' },
  { id: 'mesh', icon: Grid3X3, title: 'Mesh Solutions' },
  { id: 'config', icon: Settings2, title: 'Configuration Recommendations' },
  { id: 'guidance', icon: Compass, title: 'Application Guidance' },
];

export const CustomizationGuidance = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section className="section cg-section" id="customization-guidance">
      <div className="container">
        <div className="cg-header">
          <span className="section-eyebrow small-label">Customization & Guidance</span>
          <h2 className="section-heading" style={{ marginTop: 'var(--space-xs)' }}>
            Solutions Tailored to Your Requirements
          </h2>
          <p className="cg-subheading">
            Every project is different. We guide customers in selecting the right configurations, finishes, and systems according to their requirements.
          </p>
        </div>

        <div
          ref={ref}
          className={`cg-grid ${isRevealed ? 'is-revealed' : ''}`}
        >
          {options.map((opt) => {
            const Icon = opt.icon;
            return (
              <div key={opt.id} className="cg-card reveal-stagger">
                <div className="cg-card-icon">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="cg-card-content">
                  <h3 className="cg-card-title">{opt.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
