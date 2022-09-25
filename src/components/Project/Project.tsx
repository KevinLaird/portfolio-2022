import React from 'react';
import styles from './Project.module.scss';

const Project = (): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div>
        <h1>Title</h1>
        <h3>Subtitle</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
        explicabo.
      </p>
      <a className={styles.cta} href="https://kevinlaird.me">
        About
        <img
          src="./assets/icons/caret_right.svg"
          alt="Caret pointing right"
        />
      </a>
    </div>
    <img
      className={styles.image}
      src="./assets/introspect/splash.png"
      alt="alt"
    />
  </div>
);

export default Project;
