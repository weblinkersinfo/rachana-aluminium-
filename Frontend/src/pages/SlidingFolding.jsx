import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { ROUTES } from '../constants/routes';
import { ConnectCTA } from '../components/products/ConnectCTA';
import { SlidingFoldingAnimation } from '../components/products/SlidingFoldingAnimation';
import './SlidingFolding.css';

export const SlidingFolding = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setShowAnimation(false);
      document.body.style.overflow = '';
    }, 6500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <main className="brochure-page sliding-folding-page">
      {/* Animation Overlay */}
      {showAnimation && <SlidingFoldingAnimation />}

      {/* FIXED Navigation Bar with spacing to prevent header overlap */}
      <div className="brochure-nav-bar">
        <Link to={ROUTES.ALUMINUM} className="brochure-back-link">
          <ArrowLeft size={16} /> Back to Aluminum Systems
        </Link>
      </div>

      {/* Top Section */}
      <div className="brochure-top">
        {/* CSS Flexbox will automatically order these elements on mobile */}
        <div className="brochure-header">

          {/* Order 1: Title Box */}
          <div className="brochure-brand reveal-left">
            <span className="brochure-brand-name">RACHANA ALUMINIUM</span>
            <div className="brochure-series-box">
              <h1>SLIDING FOLDING</h1>
            </div>
            <span className="brochure-subtitle">PREMIUM WINDOW SYSTEMS</span>
          </div>

          {/* Order 2: Image Layout (Moves directly under Title on Mobile) */}
          <div className="brochure-image-wrap reveal-right">
            <img src="/images/sliding folding door with grill.webp" alt="Sliding Folding Window" className="sliding-folding-img" loading="lazy" />
          </div>

          {/* Order 3: Description Paragraphs */}
          <div className="brochure-description reveal-right">
            <p>
              Our Sliding Folding Window System redefines the boundary between indoors and outdoors. Designed for expansive openings, this premium architectural solution allows you to seamlessly fold away large sections of your wall, instantly transforming your living space.
            </p>
            <p>
              Combining effortless operation with structural integrity, the system ensures top-tier performance against weather and noise. When closed, it provides exceptional security and panoramic views; when open, it offers unhindered access and ventilation.
            </p>
          </div>

        </div>
      </div>

      {/* Middle System Specs */}
      <div className="brochure-middle">
        <div className="brochure-container brochure-middle-flex">
          <div className="brochure-system-specs reveal-left">
            <h2 className="brochure-section-title">SYSTEM SPECIFICATION</h2>
            <ul className="brochure-list">
              <li><Check size={20} color="#D32F2F" style={{ flexShrink: 0 }} /> Ideal for Large Expansive Openings</li>
              <li><Check size={20} color="#D32F2F" style={{ flexShrink: 0 }} /> Multiple Configuration Options (3 to 8 sashes)</li>
              <li><Check size={20} color="#D32F2F" style={{ flexShrink: 0 }} /> Inward or Outward Opening Types</li>
              <li><Check size={20} color="#D32F2F" style={{ flexShrink: 0 }} /> Smooth & Effortless Roller Operation</li>
              <li><Check size={20} color="#D32F2F" style={{ flexShrink: 0 }} /> Heavy-duty Hardware for Longevity</li>
              <li><Check size={20} color="#D32F2F" style={{ flexShrink: 0 }} /> Superior Weather Sealing & Insulation</li>
              <li><Check size={20} color="#D32F2F" style={{ flexShrink: 0 }} /> Multi-Point Locking for Enhanced Security</li>
              <li><Check size={20} color="#D32F2F" style={{ flexShrink: 0 }} /> Flush Sill Option for Seamless Transitions</li>
              <li><Check size={20} color="#D32F2F" style={{ flexShrink: 0 }} /> Can Accommodate DGU (Double Glazed Units)</li>
              <li><Check size={20} color="#D32F2F" style={{ flexShrink: 0 }} /> Hidden Hinges for Clean Aesthetics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section - Unchanged structure, handles grid layout */}
      <div className="brochure-bottom">
        <div className="brochure-container brochure-bottom-grid">
          <div className="brochure-waterproof reveal-left">
            <img src="https://images.unsplash.com/photo-1600566753086-00f18efc2294?auto=format&fit=crop&w=800&q=80" alt="Seamless Integration" className="brochure-waterproof-img" loading="lazy" />
            <h3 className="brochure-sub-title">Blur the Lines Between Indoors & Out</h3>
            <p className="brochure-text">
              The Sliding Folding System is the ultimate choice for those who love to entertain or appreciate open-concept living. By stacking neatly to one or both sides, it maximizes the clear opening space up to 90%. Precision rollers and tracks ensure that even heavy, double-glazed panels glide with just a gentle push.
            </p>
          </div>

          <div className="brochure-specs-wrapper reveal-right">
            <h2 className="brochure-section-title">SECTION DETAIL</h2>
            <div className="brochure-specs-grid">
              <div className="brochure-spec-item">
                <span className="brochure-spec-label">System Type</span>
                <span className="brochure-spec-value">Top Hung / Bottom Rolling</span>
              </div>
              <div className="brochure-spec-item">
                <span className="brochure-spec-label">Max Shutter Width</span>
                <span className="brochure-spec-value">1200mm</span>
              </div>
              <div className="brochure-spec-item">
                <span className="brochure-spec-label">Max Shutter Height</span>
                <span className="brochure-spec-value">3000mm</span>
              </div>
              <div className="brochure-spec-item">
                <span className="brochure-spec-label">Max Weight / Panel</span>
                <span className="brochure-spec-value">120 Kg</span>
              </div>
              <div className="brochure-spec-item">
                <span className="brochure-spec-label">Glass Thickness</span>
                <span className="brochure-spec-value">8mm to 30mm</span>
              </div>
              <div className="brochure-spec-item">
                <span className="brochure-spec-label">Hardware Type</span>
                <span className="brochure-spec-value">European Standard</span>
              </div>
              <div className="brochure-spec-item">
                <span className="brochure-spec-label">Configurations</span>
                <span className="brochure-spec-value highlight">Customizable</span>
              </div>
              <div className="brochure-spec-item">
                <span className="brochure-spec-label">Low Threshold</span>
                <span className="brochure-spec-value highlight">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConnectCTA />
    </main>
  );
};