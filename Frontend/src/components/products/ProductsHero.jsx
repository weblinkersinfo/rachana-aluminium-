import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import './ProductsHero.css';

export const ProductsHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation shortly after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="products-hero">
      <div 
        className={`products-hero-bg ${isLoaded ? 'loaded' : ''}`}
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80)' }}
      ></div>
      <div className="products-hero-overlay"></div>
      
      <div className={`products-hero-content ${isLoaded ? 'loaded' : ''}`}>
        <h1 className="display-title">Crafted for Modern Living.</h1>
        <p className="products-hero-subtitle">
          Discover thoughtfully designed aluminium systems that combine aesthetics, durability, and everyday comfort.
        </p>
        <div className="products-hero-actions">
          <Button 
            variant="primary" 
            className="pill-btn"
            onClick={() => {
              document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Products ↓
          </Button>
        </div>
      </div>
    </section>
  );
};
