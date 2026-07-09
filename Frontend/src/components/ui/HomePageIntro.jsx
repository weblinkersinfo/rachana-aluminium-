import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SlidingWindowAnimation } from '../products/SlidingWindowAnimation';
import './HomePageIntro.css';

export const HomePageIntro = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Only hide the logo initially if we're on the home page
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isOpening, setIsOpening] = useState(false); // Controls when the slide happens

  useEffect(() => {
    if (!isHomePage) return;

    setShouldPlay(true);
    setIsHidden(false);
    
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }, [isHomePage]);

  const handleStartAnimation = () => {
    setIsOpening(true);

    // Tell the Header logo to start flying to its final position
    window.dispatchEvent(new Event('startLogoFlight'));

    const timer = setTimeout(() => {
      setIsHidden(true);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.dispatchEvent(new Event('homeIntroFinished'));
    }, 5500); // 5.5s after click

    // We don't really need to clear this timeout because it will unmount anyway, but it's good practice.
  };

  useEffect(() => {
    const onTrigger = () => {
      if (!isOpening) {
        handleStartAnimation();
      }
    };
    window.addEventListener('triggerHomeAnimation', onTrigger);
    return () => window.removeEventListener('triggerHomeAnimation', onTrigger);
  }, [isOpening]);

  if (!shouldPlay || isHidden) return null;

  return (
    <div className={`hpi-overlay ${isOpening ? 'is-opening' : ''}`} onClick={!isOpening ? handleStartAnimation : undefined}>
      <div className="hpi-content">
        
        <div className={`hpi-logo-trigger ${isOpening ? 'fade-out' : ''}`} style={{ cursor: 'pointer', marginTop: '180px' }}>
          <span className="hpi-click-text">CLICK HERE</span>
        </div>

        {/* 3D Sliding Window Showcase */}
        <div className="hpi-window-container">
          <SlidingWindowAnimation 
            fullScreen={true}
            width="100vw" 
            height="100vh" 
            frameColor="#111" 
            glassOpacity={0.5} // Black tinted frosted glass (50% opacity)
            animationDuration="4s"
            iterationCount="1"
            animationDelay="0s" // Start immediately when isOpening is true
            playAnimation={isOpening}
          />
        </div>

      </div>
    </div>
  );
};
