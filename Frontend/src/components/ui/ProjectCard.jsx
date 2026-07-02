import React from 'react';
import { Image } from './Image';
import './ProjectCard.css';

export const ProjectCard = ({ image, name, location, category }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <Image src={image} alt={name} aspectRatio="3/2" />
        <div className="project-overlay"></div>
      </div>
      <div className="project-info">
        <h3 className="project-name subheading">{name}</h3>
        <div className="project-meta">
          <span className="small-label">{location}</span>
          <span className="meta-separator">•</span>
          <span className="small-label">{category}</span>
        </div>
      </div>
    </div>
  );
};
