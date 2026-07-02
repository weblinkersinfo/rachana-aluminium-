import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './TrustStatistics.css';

const stats = [
  { id: 'years', value: 14, suffix: '+', label: 'Years of Experience' },
  { id: 'projects', value: 500, suffix: '+', label: 'Projects Completed' },
  { id: 'team', value: 60, suffix: '', label: 'Skilled Team Members' },
  { id: 'states', value: 5, suffix: '+', label: 'States Served' },
];

const StatItem = ({ value, suffix, label }) => {
  const { ref, count } = useCounter(value, 1500);
  return (
    <div className="ts-card" ref={ref}>
      <span className="ts-number">{count}{suffix}</span>
      <span className="ts-label">{label}</span>
    </div>
  );
};

export const TrustStatistics = () => {
  return (
    <section className="section ts-section">
      <div className="container">
        <div className="ts-header">
          <h2 className="section-heading">Serving Projects Across Multiple States</h2>
          <p className="ts-supporting">
            With workshops, a showroom, and projects across multiple regions, we continue to deliver solutions for homeowners and professionals alike.
          </p>
        </div>
        <div className="ts-grid">
          {stats.map((s) => (
            <StatItem key={s.id} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
};
