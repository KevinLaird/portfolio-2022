import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import styles from './App.module.scss';
import ProjectFilter from './components/Project/ProjectFilter';
import Projects from './components/Project/Projects';

const App = (): JSX.Element => (
  <>
    <header className={styles.header}>
      <Navbar />
    </header>
    <Hero />
    <ProjectFilter />
    <Projects />
  </>
);

export default App;
