import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { BookOpen, LifeBuoy, Wrench, Handshake } from 'lucide-react';
import './AfterSalesSupport.css';

const items = [
  { id: 'guidance', icon: BookOpen, title: 'Guidance' },
  { id: 'support', icon: LifeBuoy, title: 'Support' },
  { id: 'assistance', icon: Wrench, title: 'Assistance' },
  { id: 'relationships', icon: Handshake, title: 'Long-Term Relationships' },
];

export const AfterSalesSupport = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section className="section as-section" id="after-sales-support">
      <div className="container">
        <div className="as-header">
          <span className="section-eyebrow small-label" style={{ color: 'var(--accent-primary)' }}>
            After-Sales Support
          </span>
          <h2 className="section-heading" style={{ marginTop: 'var(--space-xs)' }}>
            Our Relationship Doesn't End After Installation
          </h2>
        </div>

        <div
          ref={ref}
          className={`as-grid ${isRevealed ? 'is-revealed' : ''}`}
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="as-card reveal-stagger">
                <div className="as-card-icon">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="as-card-title">{item.title}</h3>
              </div>
            );
          })}
        </div>

        <p className="as-bottom-text">
          We believe trust is built through consistency and continued support. Our team remains available to assist customers even after project completion.
        </p>
      </div>
    </section>
  );
};
