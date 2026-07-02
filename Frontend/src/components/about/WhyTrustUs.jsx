import React from 'react';
import { Clock, CheckSquare, Factory, SlidersHorizontal, HeadphonesIcon, MapPin } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import './WhyTrustUs.css';

const reasons = [
  { id: 'years', icon: <Clock size={28} strokeWidth={1.5} />, title: '14+ Years Experience' },
  { id: 'projects', icon: <CheckSquare size={28} strokeWidth={1.5} />, title: '500+ Completed Projects' },
  { id: 'inhouse', icon: <Factory size={28} strokeWidth={1.5} />, title: '90% In-House Manufacturing' },
  { id: 'custom', icon: <SlidersHorizontal size={28} strokeWidth={1.5} />, title: 'Customization & Guidance' },
  { id: 'aftersales', icon: <HeadphonesIcon size={28} strokeWidth={1.5} />, title: 'After-Sales Support' },
  { id: 'states', icon: <MapPin size={28} strokeWidth={1.5} />, title: 'Multi-State Presence' },
];

const TrustCard = ({ icon, title, index }) => {
  const { ref, isRevealed } = useReveal();
  return (
    <div
      ref={ref}
      className={`trust-card ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="trust-card-icon">{icon}</div>
      <h3 className="trust-card-title">{title}</h3>
    </div>
  );
};

export const WhyTrustUs = () => {
  return (
    <section className="section why-trust-section">
      <div className="container">
        <h2 className="section-heading why-trust-heading">Why Choose Rachana Aluminium</h2>
        <div className="why-trust-grid">
          {reasons.map((r, i) => (
            <TrustCard key={r.id} icon={r.icon} title={r.title} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
