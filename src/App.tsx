import React from 'react';
import styles from './App.module.scss';
import logo from './logo.svg';

const App = (): JSX.Element => (
  <div className={styles.App}>
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
