import { useState, useMemo } from 'react';
import { projectsData, CATEGORIES } from '../data/projectsData';

/**
 * Manages active filter tab and returns the filtered projects list.
 */
export const useProjectFilter = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.ALL);

  const filteredProjects = useMemo(() => {
    if (activeCategory === CATEGORIES.ALL) return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const tabs = Object.values(CATEGORIES);

  return { activeCategory, setActiveCategory, filteredProjects, tabs };
};
