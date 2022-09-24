import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import styles from './App.module.scss';
import logo from './logo.svg';
import ProjectFilter from './components/Project/ProjectFilter';
import Project from './components/Project/Project';

const App = (): JSX.Element => (
  <>
    <header className={styles.header}>
      <Navbar />
    </header>
    <Hero />
    <ProjectFilter />
    <Project />
  </>
);

export default App;
