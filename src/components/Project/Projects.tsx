import React, { useState } from 'react';
import Project from './Project';
import ProjectFilter from './ProjectFilter';
import styles from './Projects.module.scss';

const FILTER_DATA = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Games',
  },
  {
    id: 3,
    name: 'Websites',
  },
  {
    id: 4,
    name: 'Apps',
  },
];

const PROJECT_DATA = [
  {
    id: 1,
    title: 'IntroSpect',
    subtitle: 'Subtitle',
    summary: `Apps 
    project`,
    link: 'https://kevinlaird.me',
    src: './assets/introspect/splash.png',
    alt: 'IntroSpect Splash Image',
    tag: 4,
  },
  {
    id: 2,
    title: 'IntroSpect',
    subtitle: 'Subtitle',
    summary: 'Games project',
    link: 'https://kevinlaird.me',
    src: './assets/introspect/splash.png',
    alt: 'IntroSpect Splash Image',
    tag: 2,
  },
  {
    id: 3,
    title: 'IntroSpect',
    subtitle: 'Subtitle',
    summary: 'websites project',
    link: 'https://kevinlaird.me',
    src: './assets/introspect/splash.png',
    alt: 'IntroSpect Splash Image',
    tag: 3,
  },
];

const Projects = (): JSX.Element => {
  // Set the default filter on load to "All"
  const defaultActiveElement = FILTER_DATA.find(
    (filterOption) => (filterOption.name === 'All'),
  );

  // Save the filter ID as the default active state filter
  const [activeFilterId, setActiveFilterId] = useState(
    defaultActiveElement ? defaultActiveElement.id : 1,
  );

  const projectFilter = (activeFilterId === 1) ? PROJECT_DATA
    : PROJECT_DATA.filter(
      (project) => project.tag === activeFilterId,
    );

  return (
    <>
      <ProjectFilter
        activeFilterId={activeFilterId}
        setActiveFilterId={setActiveFilterId}
        filterData={FILTER_DATA}
      />
      <div className={styles.container}>
        {
          projectFilter.length !== 0
          && projectFilter.map((project) => (
            <Project
              key={`project-${project.id}`}
              title={project.title}
              subtitle={project.subtitle}
              summary={project.summary}
              link={project.link}
              src={project.src}
              alt={project.alt}
            />
          ))
        }
      </div>
    </>
  );
};

export default Projects;
