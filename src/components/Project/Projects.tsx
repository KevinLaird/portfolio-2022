import React from 'react';
import Project from './Project';
import styles from './Projects.module.scss';

const PROJECT_DATA = [
  {
    id: 1,
    title: 'IntroSpect',
    subtitle: 'Subtitle',
    summary: 'Produced an Augmented Reality application in Angular.js using the MUSE Headset API to visualize real-time data that will help with meditation. Presented to 100s of people and received a satisfaction rating of 94.3%.',
    link: 'https://kevinlaird.me',
    src: './assets/introspect/splash.png',
    alt: 'IntroSpect Splash Image',
  },
  {
    id: 1,
    title: 'IntroSpect',
    subtitle: 'Subtitle',
    summary: 'lorem ipsum dolor',
    link: 'https://kevinlaird.me',
    src: './assets/introspect/splash.png',
    alt: 'IntroSpect Splash Image',
  },
];

const Projects = (): JSX.Element => (
  <div className={styles.container}>
    {
      PROJECT_DATA.length !== 0
      && PROJECT_DATA.map((project) => (
        <Project
          key={project.id}
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
);

export default Projects;
