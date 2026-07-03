import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CasementWindowAnimation } from '../products/CasementWindowAnimation';
import './CasementWindowIntro.css';

export const CasementWindowIntro = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isHidden, setIsHidden] = useState(true); // Hidden by default unless we determine it should play

  useEffect(() => {
    if (!isHomePage) return;

    // Check if we've already played the intro in this session
    const hasPlayed = sessionStorage.getItem('rachanaIntroPlayed');
    
    if (!hasPlayed) {
      setShouldPlay(true);
      setIsHidden(false);
      
      // Prevent scrolling while the intro plays
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      // The entire sequence takes about 8.5 seconds
      // Fading out the overlay starts around 8s
      const timer = setTimeout(() => {
        setIsHidden(true);
        sessionStorage.setItem('rachanaIntroPlayed', 'true');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      }, 8500);

      return () => {
        clearTimeout(timer);
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      };
    }
  }, [isHomePage]);

  if (!shouldPlay || isHidden) return null;

  return (
    <div className="cwi-overlay">
      <div className="cwi-content">
        
        {/* Typography Section */}
        <div className="cwi-text-container">
          <h1 className="cwi-title">Rachana Aluminium</h1>
          <p className="cwi-tagline">Premium Aluminium Windows & Doors</p>
        </div>

        {/* 3D Window Showcase */}
        <div className="cwi-window-container">
          <CasementWindowAnimation 
            width="800px" 
            height="500px" 
            frameColor="#111" 
            glassOpacity={0.1}
            animationDuration="6s"
            iterationCount="1"
            animationDelay="2s"
            openingAngle={95}
          />
        </div>

      </div>
    </div>
  );
};
