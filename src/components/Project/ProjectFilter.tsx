import React, {
  SyntheticEvent, Dispatch, SetStateAction,
} from 'react';
import styles from './ProjectFilter.module.scss';

interface FilterDataPropTypes {
  id: number;
  name: string;
}

interface ProjectFilterPropTypes {
  activeFilterId: number;
  setActiveFilterId: Dispatch<SetStateAction<number>>;
  filterData: FilterDataPropTypes[];
}

const ProjectFilter: React.FC<ProjectFilterPropTypes> = (
  { activeFilterId, setActiveFilterId, filterData },
): JSX.Element => {
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
        {filterData.length !== 0
          && filterData.map((option) => (
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
