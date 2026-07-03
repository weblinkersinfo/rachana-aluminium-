import React from 'react';
import './CasementWindowAnimation.css';

export const CasementWindowAnimation = ({
  width = '100%',
  height = '600px',
  frameColor = '#222222',
  glassOpacity = 0.15,
  animationDuration = '6s',
  autoPlay = true,
  openingAngle = 85, // degrees
  iterationCount = 'infinite',
  animationDelay = '0s',
  fullScreen = false
}) => {
  // We use CSS variables to pass props dynamically to the stylesheet
  const componentStyle = {
    '--cwa-width': width,
    '--cwa-height': height,
    '--cwa-frame-color': frameColor,
    '--cwa-glass-opacity': glassOpacity,
    '--cwa-duration': animationDuration,
    '--cwa-angle-left': `-${openingAngle}deg`,
    '--cwa-angle-right': `${openingAngle}deg`,
    '--cwa-play-state': autoPlay ? 'running' : 'paused',
    '--cwa-iteration': iterationCount,
    '--cwa-delay': animationDelay
  };

  const containerClass = `cwa-container ${fullScreen ? 'cwa-fullscreen' : ''}`;

  return (
    <div className={containerClass} style={componentStyle}>
      <div className="cwa-scene">
        
        {/* The Outer Main Frame */}
        <div className="cwa-outer-frame">
          {/* Top, Bottom, Left, Right inner depths for 3D realism */}
          <div className="cwa-frame-depth top"></div>
          <div className="cwa-frame-depth bottom"></div>
          <div className="cwa-frame-depth left"></div>
          <div className="cwa-frame-depth right"></div>
          
          {/* The two swinging shutters */}
          <div className="cwa-shutters-wrapper">
            
            {/* Left Shutter */}
            <div className="cwa-shutter cwa-shutter-left">
              {/* Shutter Frame */}
              <div className="cwa-shutter-frame"></div>
              {/* Glass */}
              <div className="cwa-glass">
                <div className="cwa-glass-reflection"></div>
              </div>
              {/* Handle */}
              <div className="cwa-handle cwa-handle-left">
                <div className="cwa-handle-base"></div>
                <div className="cwa-handle-grip"></div>
              </div>
              {/* Hinges */}
              <div className="cwa-hinge top left"></div>
              <div className="cwa-hinge bottom left"></div>
            </div>

            {/* Right Shutter */}
            <div className="cwa-shutter cwa-shutter-right">
              {/* Shutter Frame */}
              <div className="cwa-shutter-frame"></div>
              {/* Glass */}
              <div className="cwa-glass">
                <div className="cwa-glass-reflection"></div>
              </div>
              {/* Handle */}
              <div className="cwa-handle cwa-handle-right">
                <div className="cwa-handle-base"></div>
                <div className="cwa-handle-grip"></div>
              </div>
              {/* Hinges */}
              <div className="cwa-hinge top right"></div>
              <div className="cwa-hinge bottom right"></div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};
