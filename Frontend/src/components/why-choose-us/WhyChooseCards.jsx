import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { Award, CheckCircle, Factory, Settings2, Headphones, Heart } from 'lucide-react';
import './WhyChooseCards.css';

const reasons = [
  { id: 'experience', icon: Award, title: '14+ Years of Experience' },
  { id: 'projects', icon: CheckCircle, title: '500+ Completed Projects' },
  { id: 'inhouse', icon: Factory, title: '90% In-House Manufacturing' },
  { id: 'customization', icon: Settings2, title: 'Customization & Guidance' },
  { id: 'aftersales', icon: Headphones, title: 'After-Sales Support' },
  { id: 'attention', icon: Heart, title: 'Personal Attention' },
];

export const WhyChooseCards = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section className="section wcc-section" id="why-choose-cards">
      <div className="container">
        <div className="wcc-header">
          <span className="section-eyebrow small-label" style={{ color: 'var(--accent-primary)' }}>
            The Rachana Difference
          </span>
          <h2 className="section-heading" style={{ marginTop: 'var(--space-xs)' }}>
            Why Builders & Homeowners Choose Us
          </h2>
        </div>

        <div
          ref={ref}
          className={`wcc-grid ${isRevealed ? 'is-revealed' : ''}`}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.id} className="wcc-card reveal-stagger">
                <div className="wcc-card-icon">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="wcc-card-title">{reason.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
