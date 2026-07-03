import React from 'react';
import './SlidingWindowAnimation.css';

export const SlidingWindowAnimation = ({
  width = '100%',
  height = '600px',
  frameColor = '#222222',
  glassOpacity = 0.15,
  animationDuration = '6s',
  autoPlay = true,
  iterationCount = 'infinite',
  animationDelay = '0s',
  fullScreen = false,
  playAnimation = true
}) => {
  // We use CSS variables to pass props dynamically to the stylesheet
  const componentStyle = {
    '--swa-width': width,
    '--swa-height': height,
    '--swa-frame-color': frameColor,
    '--swa-glass-opacity': glassOpacity,
    '--swa-duration': animationDuration,
    '--swa-play-state': (autoPlay && playAnimation) ? 'running' : 'paused',
    '--swa-iteration': iterationCount,
    '--swa-delay': animationDelay
  };

  const containerClass = `swa-container ${fullScreen ? 'swa-fullscreen' : ''}`;

  return (
    <div className={containerClass} style={componentStyle}>
      <div className="swa-scene">
        
        {/* The Outer Main Frame */}
        <div className="swa-outer-frame">
          {/* Inner depths for 3D realism */}
          <div className="swa-frame-depth top"></div>
          <div className="swa-frame-depth bottom"></div>
          <div className="swa-frame-depth left"></div>
          <div className="swa-frame-depth right"></div>
          
          {/* Middle dividing mullion (optional, maybe not for center-parting unless it's a 4-panel. Actually center parting usually implies 2 outer fixed panels, 2 inner sliding. But for a loader, let's just make the two huge panels slide apart) */}
          
          {/* The sliding shutters */}
          <div className="swa-shutters-wrapper">
            
            {/* Left Shutter */}
            <div className="swa-shutter swa-shutter-left">
              {/* Shutter Frame */}
              <div className="swa-shutter-frame"></div>
              {/* Glass */}
              <div className="swa-glass">
                <div className="swa-glass-reflection"></div>
              </div>
            </div>

            {/* Right Shutter */}
            <div className="swa-shutter swa-shutter-right">
              {/* Shutter Frame */}
              <div className="swa-shutter-frame"></div>
              {/* Glass */}
              <div className="swa-glass">
                <div className="swa-glass-reflection"></div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};
