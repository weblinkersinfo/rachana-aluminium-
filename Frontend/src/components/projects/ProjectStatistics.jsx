import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './ProjectStatistics.css';

const stats = [
  { id: 'years', value: 14, suffix: '+', label: 'Years of Experience' },
  { id: 'projects', value: 500, suffix: '+', label: 'Projects Completed' },
  { id: 'states', value: 5, suffix: '+', label: 'States Served' },
  { id: 'team', value: 60, suffix: '', label: 'Team Members' },
];

const StatCounter = ({ value, suffix, label }) => {
  const { ref, count } = useCounter(value, 1500);
  return (
    <div className="stat-card" ref={ref}>
      <span className="stat-number">
        {count}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

export const ProjectStatistics = () => {
  return (
    <section className="section stat-section">
      <div className="container">
        <h2 className="stat-heading">Experience Built Through Projects.</h2>
        <div className="stat-grid">
          {stats.map((s) => (
            <StatCounter key={s.id} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
};
