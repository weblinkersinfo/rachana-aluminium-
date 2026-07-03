import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ROUTES } from '../constants/routes';
import { ConnectCTA } from '../components/products/ConnectCTA';
import { CasementWindowAnimation } from '../components/products/CasementWindowAnimation';
import './CasementWindow.css';

export const CasementWindow = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Disable scrolling to prevent operating the website during animation
    document.body.style.overflow = 'hidden';

    // The casement swing animation takes about 6 seconds, plus fade out
    const timer = setTimeout(() => {
      setShowAnimation(false);
      document.body.style.overflow = ''; // Re-enable scrolling
    }, 6500);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = ''; // Ensure scrolling is re-enabled if unmounted
    };
  }, []);

  return (
    <main className="brochure-page casement-window-page">
      
      {/* High-End 3D Full Screen Loader */}
      {showAnimation && (
        <div style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 999999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <CasementWindowAnimation 
            fullScreen={true}
            width="100vw" 
            height="100vh" 
            frameColor="#111"
            glassOpacity={0.15}
            openingAngle={110}
            iterationCount="1"
          />
        </div>
      )}

      {/* Top Section - Gray Background */}
      <div className="brochure-top">
        <div className="brochure-container">
          
          <Link to={ROUTES.ALUMINUM} className="brochure-back-link">
            <ArrowLeft size={16} /> Back to Aluminum Systems
          </Link>

          <div className="brochure-header">
            {/* Left Side: Brand and Title Box */}
            <div className="brochure-brand reveal-left">
              <span className="brochure-brand-name">RACHANA ALUMINIUM</span>
              <div className="brochure-series-box">
                <h1>CASEMENT WINDOW</h1>
              </div>
              <span className="brochure-subtitle">PREMIUM OUTWARD OPENING SYSTEMS</span>
            </div>

            {/* Right Side: Description */}
            <div className="brochure-description reveal-right">
              <p>
                Our Casement Window System is the epitome of classic elegance combined with modern performance. Hinged at the side and opening outward, these windows are engineered to capture the breeze and direct fresh air into your home.
              </p>
              <p>
                With advanced multi-point locking mechanisms and a tight compression seal, our casement windows offer unparalleled security and superior weather resistance, making them one of the most energy-efficient window styles available.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Overlapping Image & System Specs */}
      <div className="brochure-middle">
        <div className="brochure-container brochure-middle-flex">
          <div className="brochure-system-specs reveal-left">
            <h2 className="brochure-section-title">SYSTEM SPECIFICATION</h2>
            <ul className="brochure-list">
              <li>Excellent Ventilation & Air Flow Control</li>
              <li>Superior Energy Efficiency & Insulation</li>
              <li>Airtight Compression Seal against wind and rain</li>
              <li>Multi-Point Locking for maximum security</li>
              <li>Heavy-duty Friction Stay Hinges</li>
              <li>Smooth, Effortless Operation</li>
              <li>Accommodates Single or Double Glazed Units</li>
              <li>Customizable sizes and configurations</li>
              <li>Optional Fly Mesh Integration</li>
            </ul>
          </div>

          <div className="brochure-image-wrap">
            <img src="/images/design Aluminium-Casement-Windows.webp" alt="Casement Window System" className="casement-window-img" />
          </div>
        </div>
      </div>

      {/* Bottom Section - White Background */}
      <div className="brochure-bottom">
        <div className="brochure-container brochure-bottom-grid">
          
          {/* Left Column: Seamless Integration */}
          <div className="brochure-waterproof reveal-left">
            <img src="/images/casement window.jpg" alt="Classic Design" className="brochure-waterproof-img" />
            <h3 className="brochure-sub-title">Unobstructed Views & Fresh Air</h3>
            <p className="brochure-text">
              Unlike sliding windows which always have one panel overlapping the other, casement windows can be cranked completely open, offering you 100% unobstructed views and maximum ventilation. The sash acts like a sail, catching passing breezes and funneling them indoors.
            </p>
          </div>

          {/* Right Column: Specs */}
          <div className="brochure-specs-wrapper reveal-right">
            <h2 className="brochure-section-title">SECTION DETAIL</h2>
            
            <div className="brochure-specs-grid">
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">System Type</span>
              <span className="brochure-spec-value">Side Hung / Open Out</span>
            </div>
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">Max Shutter Width</span>
              <span className="brochure-spec-value">900mm</span>
            </div>
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">Max Shutter Height</span>
              <span className="brochure-spec-value">2100mm</span>
            </div>
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">Glass Thickness</span>
              <span className="brochure-spec-value">6mm to 24mm</span>
            </div>
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">Hardware Type</span>
              <span className="brochure-spec-value">Friction Stay Hinge</span>
            </div>
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">Locking Mechanism</span>
              <span className="brochure-spec-value">Multi-Point Handle</span>
            </div>
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">Weather Sealing</span>
              <span className="brochure-spec-value highlight">Double EPDM Gasket</span>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      <ConnectCTA />
    </main>
  );
};
