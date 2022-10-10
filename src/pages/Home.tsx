import React from 'react';
import styles from './Home.module.scss';
import Projects from '../components/Project/Projects';

const Home = (): JSX.Element => (
  <>
    <article className={styles.Hero}>
      <header className={styles.titleBox}>
        <h4>Lorem, ipsum dolor.</h4>
        <h1>Lorem, ipsum dolor sit amet consectetur</h1>
      </header>
    </article>
    <Projects />
  </>
);

export default Home;
