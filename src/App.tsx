import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';

const App = (): JSX.Element => (
  <>
    <header className={styles.header}>
      <Navbar />
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
);

export default App;
