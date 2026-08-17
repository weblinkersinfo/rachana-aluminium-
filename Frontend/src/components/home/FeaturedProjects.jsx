import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from '../ui/ProjectCard';
import { featuredProjects } from '../../data/projectsData';
import { useReveal } from '../../hooks/useReveal';
import './FeaturedProjects.css';

export const FeaturedProjects = () => {
  const { ref, isRevealed } = useReveal();

  return (
    <section 
      ref={ref} 
      className={`featured-projects section-padding bg-primary reveal ${isRevealed ? 'is-revealed' : ''}`}
    >
      <div className="container" style={{ paddingTop: '20px' }}>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="reveal-stagger">
              <ProjectCard 
                name={project.name}
                location={project.location}
                category={project.category}
                image={project.images[0]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
