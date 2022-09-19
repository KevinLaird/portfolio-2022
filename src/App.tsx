import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import styles from './App.module.scss';
import logo from './logo.svg';

const App = (): JSX.Element => (
  <>
    <header className={styles.header}>
      <Navbar />
    </header>
    <Hero />
  </>
);

export default App;
