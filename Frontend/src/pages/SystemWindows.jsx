import React from 'react';
import { ConnectCTA } from '../components/products/ConnectCTA';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import './SystemWindows.css';

export const SystemWindows = () => {
  return (
    <main className="sys-page">
      {/* Hero Section */}
      <section className="sys-hero">
        <div className="sys-hero-bg"></div>
        <div className="sys-hero-overlay"></div>
        <div className="container sys-hero-content reveal-stagger">
          <span className="sys-badge">Premium Collection</span>
          <h1 className="display-heading">The Pinnacle of<br/>Window Engineering</h1>
          <p className="sys-hero-subtitle">
            Uncompromising aesthetics meeting relentless durability. Explore our signature series designed for architectural excellence.
          </p>
        </div>
      </section>

      {/* 25mm Series */}
      <section className="sys-series-section section">
        <div className="container">
          <div className="sys-series-grid">
            <div className="sys-image-col reveal-left">
              <div className="sys-image-wrapper">
                <img src="/images/sys_25mm.png" alt="25mm System Window" className="sys-series-img" />
                <div className="sys-image-accent"></div>
              </div>
            </div>
            <div className="sys-content-col reveal-right">
              <h2 className="section-heading">25mm Series</h2>
              <p className="sys-series-desc">
                The absolute definition of minimal aesthetic. Designed for those who appreciate clean lines and uninterrupted views without sacrificing smooth operation.
              </p>
              <ul className="sys-feature-list">
                <li><CheckCircle2 className="sys-feature-icon" /> Exceptionally Smooth Operation</li>
                <li><CheckCircle2 className="sys-feature-icon" /> Ultra-Minimalist Thin Frames</li>
                <li><CheckCircle2 className="sys-feature-icon" /> Striking Architectural Aesthetic</li>
              </ul>
              <Link to={ROUTES.SERIES_25MM} className="btn btn-outline" style={{ marginTop: 'var(--space-md)', display: 'inline-flex' }}>
                Explore 25mm Series <ArrowRight size={20} className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 29mm Series */}
      <section className="sys-series-section section bg-secondary">
        <div className="container">
          <div className="sys-series-grid reverse-mobile">
            <div className="sys-content-col reveal-left">
              <h2 className="section-heading">29mm Series</h2>
              <p className="sys-series-desc">
                The perfect balance of form and function. This series introduces enhanced noise reduction and incredibly smooth sliding mechanisms built for everyday luxury.
              </p>
              <ul className="sys-feature-list">
                <li><CheckCircle2 className="sys-feature-icon" /> Advanced Noise Reduction</li>
                <li><CheckCircle2 className="sys-feature-icon" /> Effortless Smooth Sliding</li>
                <li><CheckCircle2 className="sys-feature-icon" /> Highly Durable Construction</li>
              </ul>
              <Link to={ROUTES.SERIES_29MM} className="btn btn-outline" style={{ marginTop: 'var(--space-md)', display: 'inline-flex' }}>
                Explore 29mm Series <ArrowRight size={20} className="btn-icon" />
              </Link>
            </div>
            <div className="sys-image-col reveal-right">
              <div className="sys-image-wrapper">
                <img src="/images/sys_29mm.png" alt="29mm System Window" className="sys-series-img" />
                <div className="sys-image-accent left"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 36mm Series */}
      <section className="sys-series-section section">
        <div className="container">
          <div className="sys-series-grid">
            <div className="sys-image-col reveal-left">
              <div className="sys-image-wrapper">
                <img src="/images/sys_36mm.png" alt="36mm System Window" className="sys-series-img" />
                <div className="sys-image-accent"></div>
              </div>
            </div>
            <div className="sys-content-col reveal-right">
              <h2 className="section-heading">36mm Series</h2>
              <p className="sys-series-desc">
                Our most robust offering, engineered specifically for high-exposure areas like balconies. Heavy materials ensure absolute security and weatherproofing.
              </p>
              <ul className="sys-feature-list">
                <li><CheckCircle2 className="sys-feature-icon" /> Heavy-Duty Material & Secure</li>
                <li><CheckCircle2 className="sys-feature-icon" /> Ultimate Waterproofing</li>
                <li><CheckCircle2 className="sys-feature-icon" /> Premium Noise-Proofing</li>
                <li><CheckCircle2 className="sys-feature-icon" /> Ideal for Large Balconies</li>
              </ul>
              <Link to={ROUTES.SERIES_36MM} className="btn btn-outline" style={{ marginTop: 'var(--space-md)', display: 'inline-flex' }}>
                Explore 36mm Series <ArrowRight size={20} className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Summary CTA */}
      <section className="sys-summary section bg-dark text-inverse" style={{ textAlign: 'center' }}>
        <div className="container reveal">
          <h2 className="section-heading" style={{ color: 'var(--text-inverse)', marginBottom: 'var(--space-md)' }}>Experience The Quality In Person</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto var(--space-lg)', color: 'rgba(255,255,255,0.7)' }}>
            Visit our showroom to feel the smooth operation, observe the heavy materials, and appreciate the minimalistic aesthetics of our System Windows.
          </p>
          <Link to={ROUTES.CONNECT} className="btn btn-primary" style={{ display: 'inline-flex', padding: '16px 32px' }}>
            Schedule a Visit <ArrowRight size={20} className="btn-icon" />
          </Link>
        </div>
      </section>

      <ConnectCTA />
    </main>
  );
};
