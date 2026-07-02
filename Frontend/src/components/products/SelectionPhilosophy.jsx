import React from 'react';
import { Layout, SlidersHorizontal, Compass } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import './SelectionPhilosophy.css';

const philosophyItems = [
  {
    id: 'space',
    icon: <Layout size={32} strokeWidth={1.5} />,
    title: 'Designed Around Your Space',
  },
  {
    id: 'custom',
    icon: <SlidersHorizontal size={32} strokeWidth={1.5} />,
    title: 'Customized To Your Preferences',
  },
  {
    id: 'experience',
    icon: <Compass size={32} strokeWidth={1.5} />,
    title: 'Guided By Experience',
  }
];

export const SelectionPhilosophy = () => {
  return (
    <section className="section philosophy-section bg-light">
      <div className="container">
        <div className="philosophy-content">
          <div className="philosophy-header">
            <SectionHeader 
              title="Choosing the Right System." 
              subtitle="Every project is unique. Window size, usage, aesthetics, ventilation requirements, and personal preferences all influence the ideal solution. Our team helps you choose systems that complement both your space and your lifestyle."
              alignment="left"
            />
          </div>
          
          <div className="philosophy-cards">
            {philosophyItems.map((item) => (
              <div key={item.id} className="philosophy-card">
                <div className="philosophy-icon">
                  {item.icon}
                </div>
                <h3 className="philosophy-card-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
