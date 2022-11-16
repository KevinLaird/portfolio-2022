import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Project.module.scss';

interface ProjectPropTypes {
  title: string;
  subtitle: string;
  summary: string;
  src: string;
  alt: string;
}

const Project: React.FC<ProjectPropTypes> = ({
  title,
  subtitle,
  summary,
  src,
  alt,
}): JSX.Element => (
  <div className={styles.container}>
    <img
      className={styles.image}
      src={src}
      alt={alt}
    />
    <div className={styles.content}>
      <div>
        <header>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
        </header>
        <p className={styles.summary}>
          {summary}
        </p>
      </div>

      <Link className={styles.cta} to={`/projects/${title}`}>
        Read More
      </Link>
    </div>

  </div>
);

export default Project;
