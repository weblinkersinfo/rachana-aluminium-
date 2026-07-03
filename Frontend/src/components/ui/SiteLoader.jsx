import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SiteLoader.css';

export const SiteLoader = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  // Only show the loader on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;

    // Prevent scrolling while loading across all browsers/devices
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // The overlay will wait for the user to click the enter button.
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isHomePage]);

  const handleEnterClick = () => {
    setIsLoaded(true);
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    
    // Completely hide after animation finishes to prevent DOM blocking
    setTimeout(() => {
      setIsHidden(true);
    }, 1500); // matches the 1.5s transition time
  };

  if (!isHomePage || isHidden) return null;

  return (
    <div className={`site-loader-container ${isLoaded ? 'loaded' : ''}`}>
      {/* Center Logo */}
      <div 
        className="site-loader-logo-wrapper interactive" 
        onClick={handleEnterClick}
      >
        <img 
          src="/images/logo white.png" 
          alt="Rachana Aluminium" 
          className="site-loader-logo" 
        />
        {!isLoaded && (
          <span className="site-loader-click-text">
            Click to open
          </span>
        )}
      </div>

      {/* The Two Window Panels */}
      <div className="site-loader-panel left"></div>
      <div className="site-loader-panel right"></div>
    </div>
  );
};
