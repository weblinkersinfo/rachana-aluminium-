import React from 'react';
import { Home, Building2, Hotel, Landmark } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import './CategoryCards.css';

const categories = [
  {
    id: 'residential',
    icon: <Home size={28} strokeWidth={1.5} />,
    title: 'Residential',
    desc: 'Elegant homes, apartments, villas, and farmhouses.',
  },
  {
    id: 'commercial',
    icon: <Building2 size={28} strokeWidth={1.5} />,
    title: 'Commercial',
    desc: 'Offices, commercial buildings, and business spaces.',
  },
  {
    id: 'hospitality',
    icon: <Hotel size={28} strokeWidth={1.5} />,
    title: 'Hospitality',
    desc: 'Hotels, resorts, casinos, boats, and premium leisure spaces.',
  },
  {
    id: 'government',
    icon: <Landmark size={28} strokeWidth={1.5} />,
    title: 'Government & Institutional',
    desc: 'Courts and institutional projects executed with professionalism and trust.',
  },
];

export const CategoryCards = () => {
  return (
    <section className="section cat-section bg-secondary">
      <div className="container">
        <SectionHeader
          title="Built Across Different Spaces."
          subtitle="Every project has unique requirements, scales, and challenges. From modern homes to government institutions, our approach remains the same — quality workmanship, careful execution, and long-term relationships."
          alignment="left"
        />
        <div className="cat-grid">
          {categories.map((c) => (
            <div key={c.id} className="cat-card">
              <div className="cat-icon">{c.icon}</div>
              <h3 className="cat-title">{c.title}</h3>
              <p className="cat-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
