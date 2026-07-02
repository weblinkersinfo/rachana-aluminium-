import React, { useEffect, useState } from 'react';
import './WhyHero.css';

export const WhyHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="why-hero" id="why-hero">
      <div
        className={`why-hero-bg ${isLoaded ? 'loaded' : ''}`}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80)',
        }}
      ></div>
      <div className="why-hero-overlay"></div>

      <div className="container why-hero-container">
        <div className={`why-hero-content ${isLoaded ? 'loaded' : ''}`}>
          <p className="why-hero-eyebrow">Why Choose Rachana Aluminium</p>
          <h1 className="why-hero-title">
            Built on Trust.<br />Delivered with Precision.
          </h1>
          <p className="why-hero-subtitle">
            Every project deserves attention, quality, and accountability. We approach each project with the same care and responsibility we would expect for our own.
          </p>
        </div>
      </div>
    </section>
  );
};
