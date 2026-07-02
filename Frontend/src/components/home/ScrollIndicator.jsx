import React from 'react';
import { ArrowDown } from 'lucide-react';
import './ScrollIndicator.css';

export const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator">
      <div className="scroll-circle">
        <ArrowDown size={16} />
      </div>
      <span className="small-label">Scroll to Discover</span>
    </div>
  );
};
