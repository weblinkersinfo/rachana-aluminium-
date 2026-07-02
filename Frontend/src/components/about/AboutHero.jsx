import React, { useEffect, useState } from 'react';
import './AboutHero.css';

export const AboutHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="about-hero">
      <div
        className={`about-hero-bg ${isLoaded ? 'loaded' : ''}`}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80)',
        }}
      ></div>
      <div className="about-hero-overlay"></div>

      <div className="container about-hero-container">
        <div className={`about-hero-content ${isLoaded ? 'loaded' : ''}`}>
          <p className="about-hero-eyebrow">About Rachana Aluminium</p>
          <h1 className="display-title about-hero-title">
            Quality Products.<br />Trusted Relationships.
          </h1>
          <p className="about-hero-subtitle">
            For over 14 years, we have been helping homeowners, builders, architects, and businesses create spaces that combine functionality, durability, and modern design.
          </p>

        </div>
      </div>
    </section>
  );
};
