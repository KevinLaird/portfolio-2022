import React, { useState } from 'react';
import styles from './Tabs.module.scss';

const Tabs = (): JSX.Element => {
  const [isActive, setIsActive] = useState('');

  return (
    <div className={styles.tabContainer}>
      <button type="button" className={`${styles.tab} ${styles.active}`}>
        active Element
      </button>
      <button type="button" className={styles.tab}>Inactive Element</button>
      <button type="button" className={styles.tab}>Inactive Element</button>
      <button type="button" className={styles.tab}>Inactive Element</button>
    </div>
  );
};

export default Tabs;
