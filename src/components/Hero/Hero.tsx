import React from 'react';
import styles from './Hero.module.scss';

const Hero = (): JSX.Element => (
  <div className={styles.Hero}>
    <div className={styles.titleBox}>
      <h4>Lorem, ipsum dolor.</h4>
      <h1>Lorem, ipsum dolor sit amet consectetur</h1>
    </div>
    <ul className={styles.contact}>
      <li>
        <a href="localhost.com">LinkedIn</a>
      </li>
    </ul>
  </div>
);

export default Hero;
