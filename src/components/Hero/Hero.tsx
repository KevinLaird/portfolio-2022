import React from 'react';
import styles from './Hero.module.scss';

const Hero = (): JSX.Element => (
  <div className={styles.Hero}>
    <div className={styles.titleBox}>
      <p className={styles.subtitle}>Lorem, ipsum dolor.</p>
      <h1 className={styles.title}>Lorem, ipsum dolor sit amet consectetur</h1>
    </div>
    <ul className={styles.contact}>
      <li>
        <a href="localhost.com">LinkedIn</a>
      </li>
    </ul>
    <hr className={styles.line} />
  </div>
);

export default Hero;
