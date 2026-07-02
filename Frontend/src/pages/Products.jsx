import React from 'react';
import { ProductsHero } from '../components/products/ProductsHero';
import { ProductOverview } from '../components/products/ProductOverview';
import { ProductsGrid } from '../components/products/ProductsGrid';
import { ConnectCTA } from '../components/products/ConnectCTA';
import './Products.css';

export const Products = () => {
  return (
    <main className="products-page">
      <ProductsHero />
      <ProductOverview />
      <div id="products-grid">
        <ProductsGrid />
      </div>
      <ConnectCTA />
    </main>
  );
};
