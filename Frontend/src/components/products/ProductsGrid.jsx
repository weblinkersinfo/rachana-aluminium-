import React from 'react';
import { aluminumProducts, upvcProducts } from '../../data/productsData';
import { ProductCard } from '../ui/ProductCard';
import { SectionHeader } from '../ui/SectionHeader';
import './ProductsGrid.css';

export const ProductsGrid = () => {
  return (
    <section className="section products-grid-section">
      <div className="container">
        
        <div className="grid grid-2" style={{ gap: 'var(--space-xl)' }}>
          {/* Aluminum Section */}
          <div>
            <SectionHeader 
              title="Aluminum Systems" 
              subtitle="Premium aluminium solutions for modern living."
              alignment="center"
            />
            {aluminumProducts.length > 0 ? (
              <div className="products-grid">
                {aluminumProducts.map((product) => (
                  <ProductCard 
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    link={`/products/${product.id}`}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center text-muted" style={{ padding: 'var(--space-md) 0' }}>
                <p>Aluminum product details will be added here soon.</p>
              </div>
            )}
          </div>

          {/* UPVC Section */}
          <div>
            <SectionHeader 
              title="UPVC Windows" 
              subtitle="High-quality UPVC solutions for efficiency and durability."
              alignment="center"
            />
            {upvcProducts.length > 0 ? (
              <div className="products-grid">
                {upvcProducts.map((product) => (
                  <ProductCard 
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    link={`/products/${product.id}`}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center text-muted" style={{ padding: 'var(--space-md) 0' }}>
                <p>UPVC product details will be added here soon.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
