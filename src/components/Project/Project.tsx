import React from 'react';
import styles from './Project.module.scss';

interface ProjectPropTypes {
  title: string;
  subtitle: string;
  summary: string;
  link: string;
  src: string;
  alt: string;
}

const Project: React.FC<ProjectPropTypes> = ({
  title,
  subtitle,
  summary,
  link,
  src,
  alt,
}): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p className={styles.summary}>
          {summary}
        </p>
      </div>

      <a className={styles.cta} href={link}>
        Read More
        <img
          src="./assets/icons/caret_right.svg"
          alt="Caret pointing right"
        />
      </a>
    </div>
    <img
      className={styles.image}
      src={src}
      alt={alt}
    />
  </div>
);

export default Project;
