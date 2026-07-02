import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './WhyTrustIndicators.css';

const stats = [
  { id: 'years', value: 14, suffix: '+', label: 'Years of Experience' },
  { id: 'projects', value: 500, suffix: '+', label: 'Projects Completed' },
  { id: 'team', value: 60, suffix: '+', label: 'Skilled Team Members', display: '50–70' },
  { id: 'states', value: 5, suffix: '+', label: 'States Served' },
  { id: 'inhouse', value: 90, suffix: '%', label: 'In-House Manufacturing' },
];

const StatItem = ({ value, suffix, label, display }) => {
  const { ref, count } = useCounter(value, 1500);
  return (
    <div className="wti-card" ref={ref}>
      <span className="wti-number">
        {display ? display : `${count}${suffix}`}
      </span>
      <span className="wti-label">{label}</span>
    </div>
  );
};

export const WhyTrustIndicators = () => {
  return (
    <section className="wti-section" id="trust-indicators">
      <div className="container">
        <div className="wti-grid wti-grid--five">
          {stats.slice(0, 4).map((s) => (
            <StatItem key={s.id} value={s.value} suffix={s.suffix} label={s.label} display={s.display} />
          ))}
        </div>
        <div
          className="wti-grid"
          style={{ gridTemplateColumns: '1fr', maxWidth: '320px', margin: '1px auto 0' }}
        >
          <StatItem
            value={stats[4].value}
            suffix={stats[4].suffix}
            label={stats[4].label}
          />
        </div>
      </div>
    </section>
  );
};
