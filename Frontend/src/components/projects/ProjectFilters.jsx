import React from 'react';
import './ProjectFilters.css';

export const ProjectFilters = ({ tabs, activeCategory, onSelect }) => {
  return (
    <div className="proj-filters-wrapper">
      <div className="container">
        <div className="proj-filters">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`proj-filter-btn ${activeCategory === tab ? 'active' : ''}`}
              onClick={() => onSelect(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
