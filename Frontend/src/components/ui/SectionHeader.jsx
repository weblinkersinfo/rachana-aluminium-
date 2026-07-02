import React from 'react';
import './SectionHeader.css';

export const SectionHeader = ({ eyebrow, title, supportingText, className = '' }) => {
  return (
    <div className={`section-header ${className}`}>
      {eyebrow && <span className="section-eyebrow small-label reveal-stagger">{eyebrow}</span>}
      <h2 className="section-title section-heading reveal-stagger">{title}</h2>
      {supportingText && <p className="section-supporting-text reveal-stagger">{supportingText}</p>}
    </div>
  );
};
