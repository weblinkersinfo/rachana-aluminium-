import React from 'react';
import './CasementAnimation.css';

export const CasementAnimation = () => {
  return (
    <div className="casement-animation-container">
      {/* Black Frame Tracks / Border */}
      <div className="casement-track top"></div>
      <div className="casement-track bottom"></div>
      <div className="casement-track side-left"></div>
      <div className="casement-track side-right"></div>

      <div className="casement-system">
        {/* Left Panel */}
        <div className="casement-panel left-panel">
          <div className="casement-glass"></div>
          {/* Handle */}
          <div className="casement-handle handle-left"></div>
        </div>

        {/* Right Panel */}
        <div className="casement-panel right-panel">
          <div className="casement-glass"></div>
          {/* Handle */}
          <div className="casement-handle handle-right"></div>
        </div>
      </div>
    </div>
  );
};
