import React from 'react';
import styles from './Home.module.scss';
import Projects from '../components/Project/Projects';

const Home = (): JSX.Element => (
  <>
    <main className={styles.Hero}>
      <div className={styles.titleBox}>
        <h4>Lorem, ipsum dolor.</h4>
        <h1>Lorem, ipsum dolor sit amet consectetur</h1>
      </div>
    </main>
    <Projects />
  </>
);

export default Home;
