import React from 'react';
import { ShieldCheck, Droplets, Sparkles, Palette } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import './WhyAluminium.css';

const features = [
  {
    id: 'durable',
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: 'Durable',
    description: 'Built to perform for years.',
  },
  {
    id: 'maintenance',
    icon: <Droplets size={28} strokeWidth={1.5} />,
    title: 'Minimal Maintenance',
    description: 'Easy to maintain and care for.',
  },
  {
    id: 'appearance',
    icon: <Sparkles size={28} strokeWidth={1.5} />,
    title: 'Elegant Appearance',
    description: 'Modern, slim, and visually clean.',
  },
  {
    id: 'customization',
    icon: <Palette size={28} strokeWidth={1.5} />,
    title: 'Customization',
    description: 'Available in various colors, configurations, and accessories.',
  }
];

export const WhyAluminium = () => {
  return (
    <section className="section why-aluminium-section">
      <div className="container">
        <SectionHeader 
          title="Why Aluminium?" 
          alignment="center"
        />
        
        <div className="why-aluminium-grid">
          {features.map((feature) => (
            <div key={feature.id} className="why-aluminium-card">
              <div className="why-aluminium-icon">
                {feature.icon}
              </div>
              <h3 className="why-aluminium-title">{feature.title}</h3>
              <p className="why-aluminium-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
