import React from 'react';
import './SlidingFoldingAnimation.css';

export const SlidingFoldingAnimation = () => {
  return (
    <div className="sf-v-animation-container">
      
      {/* Top and Bottom Tracks */}
      <div className="sf-v-track top"></div>
      <div className="sf-v-track bottom"></div>

      {/* Accordion Physics System */}
      <div className="sf-v-system">
        
        {/* Panel 4 (Hinges to the right wall) */}
        <div className="sf-v-hinge sf-v-p4">
          <div className="sf-v-visual-panel"></div>
          
          {/* Panel 3 (Hinges to Panel 4) */}
          <div className="sf-v-hinge sf-v-p3">
            <div className="sf-v-visual-panel"></div>
            
            {/* Panel 2 (Hinges to Panel 3) */}
            <div className="sf-v-hinge sf-v-p2">
              <div className="sf-v-visual-panel"></div>
              
              {/* Panel 1 (Hinges to Panel 2) - The Lead Door */}
              <div className="sf-v-hinge sf-v-p1">
                <div className="sf-v-visual-panel">
                  <div className="sf-v-handle"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
