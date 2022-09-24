import React from 'react';
import styles from './ProjectFilter.module.scss';

const ProjectFilter = (): JSX.Element => {
  let hello;
  return (
    <div className={styles.filterContainer}>
      <div className={styles.verticalLine} />
      <div className={styles.filterOptions}>
        <button className={styles.active} type="button">All</button>
        <button type="button">Games</button>
      </div>
    </div>
  );
};

export default ProjectFilter;
