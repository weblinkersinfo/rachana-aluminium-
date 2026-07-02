import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { MessageSquare, Wrench, Headphones } from 'lucide-react';
import './OurApproach.css';

const steps = [
  {
    id: 'understand',
    number: 'Step 01',
    icon: MessageSquare,
    title: 'Understand',
    description:
      'We begin by understanding your requirements, preferences, and project goals.',
  },
  {
    id: 'build',
    number: 'Step 02',
    icon: Wrench,
    title: 'Build',
    description:
      'We manufacture every system with precision, attention to detail, and quality control.',
  },
  {
    id: 'support',
    number: 'Step 03',
    icon: Headphones,
    title: 'Support',
    description:
      'From consultation to installation and after-sales service, we remain available throughout your journey.',
  },
];

export const OurApproach = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section className="section approach-section" id="our-approach">
      <div className="container">
        <div className="section-header" style={{ marginBottom: 'var(--space-lg)' }}>
          <span className="section-eyebrow small-label">Our Approach</span>
          <h2 className="section-title section-heading">How We Work With You</h2>
        </div>

        <div
          ref={ref}
          className={`approach-grid ${isRevealed ? 'is-revealed' : ''}`}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="approach-card reveal-stagger">
                <div className="approach-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <span className="approach-number">{step.number}</span>
                <h3 className="approach-card-title">{step.title}</h3>
                <p className="approach-card-desc">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
