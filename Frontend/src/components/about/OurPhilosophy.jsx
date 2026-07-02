import React from 'react';
import { Handshake, Star, UserCheck, Users } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import './OurPhilosophy.css';

const cards = [
  {
    id: 'trust',
    icon: <Handshake size={30} strokeWidth={1.5} />,
    title: 'Trust',
    desc: 'We believe relationships are built through honesty and consistency.',
  },
  {
    id: 'quality',
    icon: <Star size={30} strokeWidth={1.5} />,
    title: 'Quality',
    desc: 'Every detail matters because small details create long-lasting systems.',
  },
  {
    id: 'personal',
    icon: <UserCheck size={30} strokeWidth={1.5} />,
    title: 'Personal Attention',
    desc: 'Every project receives attention, guidance, and individual care.',
  },
  {
    id: 'people',
    icon: <Users size={30} strokeWidth={1.5} />,
    title: 'People First',
    desc: 'We value the people behind the projects as much as the projects themselves.',
  },
];

const PhilosophyCard = ({ icon, title, desc, delay }) => {
  const { ref, isRevealed } = useReveal();
  return (
    <div
      ref={ref}
      className={`phil-card ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <div className="phil-card-icon">{icon}</div>
      <h3 className="phil-card-title">{title}</h3>
      <p className="phil-card-desc">{desc}</p>
    </div>
  );
};

export const OurPhilosophy = () => {
  return (
    <section className="section our-phil-section">
      <div className="container">
        <div className="our-phil-header">
          <h2 className="section-heading our-phil-heading">What We Believe</h2>
          <p className="our-phil-sub">
            "We treat every project as if we were building it for ourselves."
          </p>
        </div>
        <div className="our-phil-cards">
          {cards.map((c, i) => (
            <PhilosophyCard
              key={c.id}
              icon={c.icon}
              title={c.title}
              desc={c.desc}
              delay={`${i * 120}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
