import React from 'react';
import { ProjectsHero } from '../components/projects/ProjectsHero';
import { CategoryCards } from '../components/projects/CategoryCards';
import { ProjectFilters } from '../components/projects/ProjectFilters';
import { ProjectsGallery } from '../components/projects/ProjectsGallery';
import { ProjectStatistics } from '../components/projects/ProjectStatistics';
import { ProjectPhilosophy } from '../components/projects/ProjectPhilosophy';
import { ProjectsConnectSection } from '../components/projects/ProjectsConnectSection';
import { useProjectFilter } from '../hooks/useProjectFilter';
import './Projects.css';

export const Projects = () => {
  const { activeCategory, setActiveCategory, filteredProjects, tabs } = useProjectFilter();

  return (
    <main className="projects-page">
      <ProjectsHero />
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
      <ProjectStatistics />
      <ProjectPhilosophy />
      <ProjectsConnectSection />
    </main>
  );
};
