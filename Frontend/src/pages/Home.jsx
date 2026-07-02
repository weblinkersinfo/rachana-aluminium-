import React from 'react';
import { Hero } from '../components/home/Hero';
import { TrustIndicators } from '../components/home/TrustIndicators';
import { BrandPhilosophy } from '../components/home/BrandPhilosophy';
import { ConnectSection } from '../components/home/ConnectSection';
import './Home.css';

export const Home = () => {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <div className="home-footer-sections">
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <BrandPhilosophy />
          <ConnectSection />
        </div>
      </div>
    </main>
  );
};
