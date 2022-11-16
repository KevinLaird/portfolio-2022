import React from 'react';
import styles from './Tab.module.scss';

interface TabPropTypes {
  activeTab: string;
  text?: string;
  onClick: any;
  value: any;
}

const Tab: React.FC<TabPropTypes> = (
  {
    activeTab, text = 'text', onClick, value,
  },
): JSX.Element => (
  <button
    type="button"
    value={value}
    className={`${styles.tab} ${activeTab === value && styles.active}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Tab;
