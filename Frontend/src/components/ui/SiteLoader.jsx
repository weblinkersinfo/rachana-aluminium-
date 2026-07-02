import React, { useState, useEffect } from 'react';
import './SiteLoader.css';

export const SiteLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading across all browsers/devices
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // Simulate load time or wait for actual window load
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      
      // Completely hide after animation finishes to prevent DOM blocking
      setTimeout(() => {
        setIsHidden(true);
      }, 1500); // matches the 1.5s transition time
    }, 2000); // 2 seconds loading presentation

    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  if (isHidden) return null;

  return (
    <div className={`site-loader-container ${isLoaded ? 'loaded' : ''}`}>
      {/* Center Logo */}
      <div className="site-loader-logo-wrapper">
        <img 
          src="/images/logo white.png" 
          alt="Loading Rachana Aluminium..." 
          className="site-loader-logo" 
        />
      </div>

      {/* The Two Window Panels */}
      <div className="site-loader-panel left"></div>
      <div className="site-loader-panel right"></div>
    </div>
  );
};
