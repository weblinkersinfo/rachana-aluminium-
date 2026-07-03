import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import './ConnectHero.css';

export const ConnectHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="conn-hero" id="connect-hero">
      <div
        className={`conn-hero-bg ${isLoaded ? 'loaded' : ''}`}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80)',
        }}
      ></div>
      <div className="conn-hero-overlay"></div>

      <div className="container conn-hero-container">
        <div className={`conn-hero-content ${isLoaded ? 'loaded' : ''}`}>
          <p className="conn-hero-eyebrow">Connect With Us</p>
          <h1 className="conn-hero-title">Let's Discuss Your Project</h1>
          <p className="conn-hero-subtitle">
            Whether you're building a new home, renovating an existing space, or planning a commercial project, we're here to understand your requirements and help you make informed decisions.
          </p>
          <div className="conn-hero-actions">
            <a href="#visit-showroom">
              <Button variant="primary">Plan Your Visit</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
