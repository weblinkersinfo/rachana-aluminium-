import React, { useState, useCallback } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import './ProjectsGallery.css';

export const ProjectsGallery = ({ projects, activeCategory }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = useCallback((project) => setSelectedProject(project), []);
  const handleClose = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      <section id="projects-gallery" className="section proj-gallery-section">
        <div className="container">
          <div className="proj-gallery-header">
            <h2 className="proj-gallery-title">Explore By Category</h2>
          </div>
        </div>

        <div className="proj-gallery-container">
          <div
            className="proj-masonry"
            key={activeCategory} /* remount to re-trigger fade on filter change */
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={handleOpen}
              />
            ))}
          </div>

          {projects.length === 0 && (
            <div className="proj-gallery-empty">
              <p>No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleClose} />
      )}
    </>
  );
};
