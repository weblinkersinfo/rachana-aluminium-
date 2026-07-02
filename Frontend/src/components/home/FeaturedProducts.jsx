import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { ProductCard } from '../ui/ProductCard';
import { featuredProducts } from '../../data/productsData';
import { useReveal } from '../../hooks/useReveal';
import './FeaturedProducts.css';

export const FeaturedProducts = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section 
      ref={ref} 
      className={`featured-products section-padding bg-secondary reveal ${isRevealed ? 'is-revealed' : ''}`}
    >
      <div className="container">
        <SectionHeader 
          eyebrow="Our Collections" 
          title="Engineered for Excellence." 
          supportingText="Explore our range of premium architectural aluminium and uPVC solutions."
        />
        
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="reveal-stagger">
              <div className="simple-product-image">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="full-cover-image" 
                  loading="lazy" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
