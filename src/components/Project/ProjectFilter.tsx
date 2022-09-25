import React, { useState } from 'react';
import styles from './ProjectFilter.module.scss';

const FILTER_DATA = [
  {
    id: 1,
    name: 'All',
    active: true,
  },
  {
    id: 2,
    name: 'Games',
    active: false,
  },
  {
    id: 3,
    name: 'Websites',
    active: false,
  },
  {
    id: 4,
    name: 'Apps',
    active: false,
  },
];

const ProjectFilter = (): JSX.Element => (
  <div className={styles.filterContainer}>
    <div className={styles.verticalLine} />
    <div className={styles.filterOptions}>
      {FILTER_DATA.length !== 0
        && FILTER_DATA.map((option) => (
          <button
            type="button"
            key={option.id}
            className={`${option.active ? styles.active : ''}`}
          >
            {option.name}
          </button>
        ))}
    </div>
  </div>
);

export default ProjectFilter;
