import React from 'react';
import { MapPin } from 'lucide-react';
import './MultiStatePresence.css';

const regions = [
  { id: 'mh', name: 'Maharashtra' },
  { id: 'ga', name: 'Goa' },
  { id: 'gj', name: 'Gujarat' },
  { id: 'ka', name: 'North Karnataka' },
  { id: 'rj', name: 'Rajasthan' },
];

export const MultiStatePresence = () => {
  return (
    <section className="section msp-section">
      <div className="container">
        <div className="msp-header">
          <h2 className="section-heading">Projects Across<br />Multiple Regions.</h2>
          <p className="msp-sub">
            Serving clients across residential and commercial sectors in multiple states.
          </p>
        </div>

        <div className="msp-regions">
          {regions.map((r) => (
            <div key={r.id} className="msp-region-card">
              <MapPin size={18} strokeWidth={1.5} className="msp-pin" />
              <span className="msp-region-name">{r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
