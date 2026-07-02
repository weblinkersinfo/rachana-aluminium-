import React from 'react';
import { ProductCard } from '../components/ui/ProductCard';
import { ConnectCTA } from '../components/products/ConnectCTA';
import { aluminumSystemProducts } from '../data/productsData';

export const AluminumSystem = () => {
  return (
    <main className="aluminum-system-page" style={{ paddingTop: '120px' }}>
      <section className="section bg-primary" style={{ paddingTop: '20px' }}>
        <div className="container">
          <h1 className="display-heading" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', fontSize: 'clamp(1.75rem, 5vw, 3.5rem)', lineHeight: '1.2', wordWrap: 'break-word' }}>
            Precision-Engineered Aluminum Systems.
          </h1>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-lg)' }}>
            {aluminumSystemProducts.map((product) => (
              <ProductCard 
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                link={`/products/${product.id}`}
                imageStyle={product.imageStyle}
              />
            ))}
          </div>
        </div>
      </section>
      <ConnectCTA />
    </main>
  );
};
