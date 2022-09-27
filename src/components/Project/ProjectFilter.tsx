import React, { SyntheticEvent, useState } from 'react';
import styles from './ProjectFilter.module.scss';

const FILTER_DATA = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Games',
  },
  {
    id: 3,
    name: 'Websites',
  },
  {
    id: 4,
    name: 'Apps',
  },
];

const ProjectFilter = (): JSX.Element => {
  // Set the default filter on load to "All"
  const defaultActiveElement = FILTER_DATA.find(
    (filterOption) => (filterOption.name === 'All'),
  );

  // Save the filter ID as the default active state filter
  const [activeFilterId, setActiveFilterId] = useState(
    defaultActiveElement ? defaultActiveElement.id : 1,
  );

  // Change the active filter
  const handleFilterUpdate = (event: SyntheticEvent): void => {
    const target = event.target as HTMLInputElement;
    const filterSelection = parseInt(target.value, 10);
    setActiveFilterId(filterSelection);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.verticalLine} />
      <div className={styles.filterOptions}>
        {FILTER_DATA.length !== 0
          && FILTER_DATA.map((option) => (
            <button
              type="button"
              key={option.id}
              value={option.id}
              className={`${option.id === activeFilterId ? styles.active : ''}`}
              onClick={handleFilterUpdate}
            >
              {option.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
