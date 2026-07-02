import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ROUTES } from '../constants/routes';
import { ConnectCTA } from '../components/products/ConnectCTA';
import './Series29mm.css';

export const Series29mm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="brochure-page series-29mm-page">
      {/* Top Section - Gray Background */}
      <div className="brochure-top">
        <div className="brochure-container">
          
          <Link to={ROUTES.SYSTEM_WINDOWS} className="brochure-back-link">
            <ArrowLeft size={16} /> Back to System Windows
          </Link>

          <div className="brochure-header">
            {/* Left Side: Brand and Title Box */}
            <div className="brochure-brand reveal-left">
              <span className="brochure-brand-name">RACHANA ALUMINIUM</span>
              <div className="brochure-series-box">
                <h1>29mm SERIES</h1>
              </div>
              <span className="brochure-subtitle">SLIDING SYSTEMS</span>
            </div>

            {/* Right Side: Description */}
            <div className="brochure-description reveal-right">
              <p>
                This Marvellously Designed combination System is Ideal Solution For Economy System Which Meets Highest Point of Aesthetic Performance and Functionality. This System is Having Highest Standards in Terms of Elegance, Comfort, and Performance. Sleek Interlocking Profile adds A lots of Glamour in this System.
              </p>
              <p>
                This system is perfect solution for residential apartments &amp; high rises projects.
              </p>
              <p>
                EPDM Gasket in interlocking profile increases sound proofing and dust proofing and proper euro groove of locking enhance security perspective and nylon roller enhance smoothness of sliding and other hardware makes this system complete.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Overlapping 3D Image & System Specs */}
      <div className="brochure-middle">
        <div className="brochure-container brochure-middle-flex">
          <div className="brochure-system-specs reveal-left">
            <h2 className="brochure-section-title">SYSTEM SPECIFICATION</h2>
            <ul className="brochure-list">
              <li>Flexible Design.</li>
              <li>Design for Bungalows &amp; Project</li>
              <li>Combination Of Sliding &amp; Fix Windows.</li>
              <li>Sleeker &amp; Studier.</li>
              <li>Smooth &amp; Effortless During Operation.</li>
              <li>Up To 24mm Glass Option Available.</li>
              <li>Single &amp; Multi Point Locking.</li>
              <li>SS304 U-Groove Bottom Rail For Smooth Sliding.</li>
              <li>Reinforcement Interlock Available To Resist Wind Pressure In High Rise.</li>
              <li>Fix &amp; Adjustable Rollers Available.</li>
              <li>Provision For Mosquito Mesh.</li>
              <li>Proper Solution For Sliding Along With Top Fix Or Bottom Fix Windows.</li>
              <li>One Unit Look Of Sliding And Fix Combination Increases Beauty Of This System.</li>
              <li>Ensures Safety when Bottom Fixed in High Rise</li>
            </ul>
          </div>

          <div className="brochure-image-wrap">
            <img src="/images/29mm_frame.png" alt="29mm Profile Render" className="brochure-3d-render" />
          </div>
        </div>
      </div>

      {/* Bottom Section - White Background */}
      <div className="brochure-bottom">
        <div className="brochure-container brochure-bottom-grid">
          
          {/* Left Column: Waterproofing */}
          <div className="brochure-waterproof reveal-left">
            <img src="/images/29mm_water_proof.png" alt="29mm Waterproofing Detail" className="brochure-waterproof-img" />
            <h3 className="brochure-sub-title">The Importance of Waterproofing</h3>
            <p className="brochure-text">
              Advanced weather-sealing technologies ensure that your interiors remain perfectly dry and comfortable. Multiple barriers prevent water ingress even during heavy monsoons, while smartly designed weep holes channel water outwards efficiently without compromising aesthetics.
            </p>
          </div>

          {/* Right Column: Specs */}
          <div className="brochure-specs-wrapper reveal-right">
            <h2 className="brochure-section-title">SECTION DETAIL</h2>
            
            <div className="brochure-specs-grid">
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">Frame Height</span>
              <span className="brochure-spec-value">50mm</span>
            </div>
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">3-track Outer Width</span>
              <span className="brochure-spec-value">115mm</span>
            </div>
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">2-track Outer Width</span>
              <span className="brochure-spec-value">72.5mm</span>
            </div>
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">Interlocking Sightline</span>
              <span className="brochure-spec-value">22.5mm</span>
            </div>
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">Roller Capacity</span>
              <span className="brochure-spec-value">Upto 120kg/pair</span>
            </div>
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">Glass Thickness</span>
              <span className="brochure-spec-value">5 To 24mm</span>
            </div>
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">Max Shutter Height</span>
              <span className="brochure-spec-value">2100mm</span>
            </div>
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">Top & Bottom Fix Option</span>
              <span className="brochure-spec-value highlight">Available</span>
            </div>
            <div className="brochure-spec-item">
              <span className="brochure-spec-label">Locking</span>
              <span className="brochure-spec-value highlight">Single & Multi-Point</span>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      <ConnectCTA />
    </main>
  );
};
