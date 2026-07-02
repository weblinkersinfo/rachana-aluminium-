import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import './ProjectCard.css';

export const ProjectCard = ({ project, onOpen }) => {
  return (
    <div className="proj-card" onClick={() => onOpen(project)}>
      <div className="proj-card-image-wrap">
        <img
          src={project.images[0]}
          alt={project.name}
          className="proj-card-image"
          loading="lazy"
        />
        <div className="proj-card-overlay">
          <div className="proj-card-overlay-content">
            <span className="proj-card-category">{project.category}</span>
            <h3 className="proj-card-name">{project.name}</h3>
            <span className="proj-card-location">
              <MapPin size={13} />
              {project.location}
            </span>
            <span className="proj-card-cta">
              View Project <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
