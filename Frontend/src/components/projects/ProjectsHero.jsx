import React, { useEffect, useState } from 'react';
import './ProjectsHero.css';

export const ProjectsHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="proj-hero">
      <div
        className={`proj-hero-bg ${isLoaded ? 'loaded' : ''}`}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1920&q=80)',
        }}
      ></div>
      <div className="proj-hero-overlay"></div>

      <div className="container proj-hero-container">
        <div className={`proj-hero-content ${isLoaded ? 'loaded' : ''}`}>
          <p className="proj-hero-eyebrow">Our Work</p>
          <h1 className="display-title proj-hero-title">
            Projects Built<br />With Precision.
          </h1>
          <p className="proj-hero-subtitle">
            Over the years, we have delivered residential, commercial, hospitality, and institutional
            projects across multiple states, always treating every project as if we were building it
            for ourselves.
          </p>
        </div>
      </div>
    </section>
  );
};
