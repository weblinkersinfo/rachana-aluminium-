import React, { useState, useCallback } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Button } from '../ui/Button';
import './ProjectsGallery.css';

const INITIAL_LOAD_COUNT = 9;

export const ProjectsGallery = ({ projects, activeCategory }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD_COUNT);

  React.useEffect(() => {
    setVisibleCount(INITIAL_LOAD_COUNT);
  }, [activeCategory]);

  const handleOpen = useCallback((project) => setSelectedProject(project), []);
  const handleClose = useCallback(() => setSelectedProject(null), []);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + INITIAL_LOAD_COUNT);
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

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
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={handleOpen}
              />
            ))}
          </div>

          {hasMore && (
            <div className="proj-gallery-load-more" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <Button variant="outline" onClick={handleLoadMore}>
                Load More Projects
              </Button>
            </div>
          )}

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
