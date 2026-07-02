import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wind, Volume2, Droplets, Tornado, Shield, Gauge } from 'lucide-react';
import { ROUTES } from '../constants/routes';
import { ConnectCTA } from '../components/products/ConnectCTA';
import './Series36mm.css'; // Make sure this is imported!

export const Series36mm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="series-36mm-page">
      
      {/* 1. HEADER SECTION (Matches Top of Image 1) */}
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
                <h1>36MM SERIES</h1>
              </div>
              <span className="brochure-subtitle">SLIDING SYSTEMS</span>
            </div>

            {/* Right Side: Description text from Image 1 */}
            <div className="brochure-description reveal-right">
              <p>
                This marvellously designed sleek system is the ideal solution for sliding Along with fix concept which meets highest point of aesthetic performance &amp; functionality. This sleek series having highest standard in terms of elegance, comfort, and performance. The interlock and fix partition profile add a lost of glamour's in this system.
              </p>
              <p>
                This hybrid system is a complete solution for today's complex construction.
              </p>
              <p>
                Proper euro groove of locking enhance the security perspective and Ss304 rollers with aluminium body enhance the performance perspective in this system also plastic accessories makes this system complete.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2 & 3. DIAGONAL SHOWCASE & SECTION DETAIL (Combined) */}
      <div className="s36-showcase reveal-fade">
        {/* Left Side: Section Details */}
        <div className="s36-section-detail-left">
          <h2 className="s36-section-title">SECTION DETAIL</h2>
          <div className="s36-cad-flex">
            <img src="/images/36_mm_section_detail_vertical.png" alt="Vertical Section Detail" className="s36-cad-img" />
            <img src="/images/36_mm_section_detail_horizontal.png" alt="Horizontal Section Detail" className="s36-cad-img-wide" />
          </div>
        </div>

        {/* Right Side: Diagonal Frame */}
        <img src="/images/36_mm_frame.png" alt="36mm Series Diagonal Frame Profile" className="s36-diagonal-frame" />
      </div>

      {/* 4. BOTTOM SPLIT SECTION (Matches Entirety of Image 2) */}
      <div className="s36-bottom-split">
          
          {/* Left Column: Vertical Frame & Icons */}
          <div className="s36-left-col reveal-left">
            <img src="/images/36_mm_frame_2.png" alt="36mm Vertical Frame Detail" className="s36-vertical-frame" />
            
            {/* Performance Icons Grid */}
            <div className="s36-icon-grid">
              <div className="s36-icon-item">
                <div className="s36-icon-circle"><Wind size={32} strokeWidth={1.5} /></div>
                <span className="s36-icon-label">AIR<br/>PERMEABILITY</span>
              </div>
              <div className="s36-icon-item">
                <div className="s36-icon-circle"><Volume2 size={32} strokeWidth={1.5} /></div>
                <span className="s36-icon-label">SOUND<br/>INSULATION</span>
              </div>
              <div className="s36-icon-item">
                <div className="s36-icon-circle"><Droplets size={32} strokeWidth={1.5} /></div>
                <span className="s36-icon-label">WATER<br/>TIGHTNESS</span>
              </div>
              <div className="s36-icon-item">
                <div className="s36-icon-circle"><Tornado size={32} strokeWidth={1.5} /></div>
                <span className="s36-icon-label">WIND<br/>RESISTANCE</span>
              </div>
              <div className="s36-icon-item">
                <div className="s36-icon-circle"><Shield size={32} strokeWidth={1.5} /></div>
                <span className="s36-icon-label">IMPACT<br/>RESISTANCE</span>
              </div>
              <div className="s36-icon-item">
                <div className="s36-icon-circle"><Gauge size={32} strokeWidth={1.5} /></div>
                <span className="s36-icon-label">AIR<br/>TIGHTNESS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specs & Graphics */}
          <div className="s36-right-col reveal-right">
            
            {/* System Specification List (Moved to Top) */}
            <div className="s36-spec-block">
              <h2 className="s36-section-title">SYSTEM SPECIFICATION</h2>
              <ul className="brochure-list">
                <li>Modern Design.</li>
                <li>Design for Bungalows &amp; Project</li>
                <li>Sleeker &amp; Studier.</li>
                <li>Smooth &amp; Effortless During Operation.</li>
                <li>Proper Solution For Today's Complex Construction.</li>
                <li>Combination Of Sliding &amp; Fix Windows.</li>
                <li>Maintenance Free.</li>
                <li>Security Key Locking Option Available For Safety.</li>
                <li>Bottom Sill Available For Protection Of Leakage Issue.</li>
                <li>SS304 U-Groove Bottom Rail For Smooth Sliding.</li>
                <li>Fix &amp; Adjustable Rollers Available.</li>
                <li>SS304 Wheel High Speed Roller Available For Heavy Duty Shutter Up To 200 Kg.</li>
                <li>Provision For Mosquito Mesh.</li>
              </ul>
            </div>

            {/* Graphics Row (Water Drainage & Slim Meeting Profile) */}
            <div className="s36-graphics-row">
              <div className="s36-water-drainage">
                <h3 className="s36-slim-title" style={{marginBottom: '10px'}}>WATER DRAINAGE</h3>
                <img src="/images/36_mm_waterproof.png" alt="Water Drainage System" />
              </div>
              <div className="s36-slim-profile">
                <h3 className="s36-slim-title">SLIM MEETING PROFILE</h3>
                <img src="/images/36_mm_slim_meeting_profile.png" alt="Slim Meeting Profile" className="s36-slim-img" />
              </div>
            </div>

            {/* Technical Specification Grid (Moved to Bottom) */}
            <div className="s36-spec-block">
              <h2 className="s36-section-title" style={{marginTop: '20px'}}>TECHNICAL SPECIFICATION</h2>
              <div className="s36-specs-grid">
                <div className="s36-spec-row">
                  <div className="s36-spec-label">Frame Height</div>
                  <div className="s36-spec-value">: 48mm</div>
                </div>
                <div className="s36-spec-row">
                  <div className="s36-spec-label">3-track Outer Width</div>
                  <div className="s36-spec-value">: 135mm</div>
                </div>
                <div className="s36-spec-row">
                  <div className="s36-spec-label">2-track Outer Width</div>
                  <div className="s36-spec-value">: 85mm</div>
                </div>
                <div className="s36-spec-row">
                  <div className="s36-spec-label">Interlocking Sightline</div>
                  <div className="s36-spec-value">: 26mm</div>
                </div>
                <div className="s36-spec-row">
                  <div className="s36-spec-label">Roller Capacity</div>
                  <div className="s36-spec-value">: Upto 200 Kg/pair</div>
                </div>
                <div className="s36-spec-row">
                  <div className="s36-spec-label">Glass Thickness</div>
                  <div className="s36-spec-value">: 5mm To 26mm</div>
                </div>
                <div className="s36-spec-row">
                  <div className="s36-spec-label">Max Shutter Height</div>
                  <div className="s36-spec-value">: 3200mm</div>
                </div>
                <div className="s36-spec-row">
                  <div className="s36-spec-label">Security Key Locking Option</div>
                  <div className="s36-spec-value">: Available</div>
                </div>
                <div className="s36-spec-row">
                  <div className="s36-spec-label">Top &amp; Bottom Fix Option</div>
                  <div className="s36-spec-value">: Available</div>
                </div>
                <div className="s36-spec-row">
                  <div className="s36-spec-label">Bottom Seal</div>
                  <div className="s36-spec-value">: Available</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      <ConnectCTA />
    </main>
  );
};
