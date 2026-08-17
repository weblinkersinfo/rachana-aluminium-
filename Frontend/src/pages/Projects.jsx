import React from 'react';
import { CategoryCards } from '../components/projects/CategoryCards';
import { ProjectFilters } from '../components/projects/ProjectFilters';
import { ProjectsGallery } from '../components/projects/ProjectsGallery';
import { useProjectFilter } from '../hooks/useProjectFilter';
import './Projects.css';

export const Projects = () => {
  const { activeCategory, setActiveCategory, filteredProjects, tabs } = useProjectFilter();

  return (
    <main className="projects-page" style={{ paddingTop: '100px' }}>
      <CategoryCards />
      <ProjectFilters
        tabs={tabs}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />
      <ProjectsGallery
        projects={filteredProjects}
        activeCategory={activeCategory}
      />
    </main>
  );
};
