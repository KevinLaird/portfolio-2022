import React from 'react';
import Tab from './Tab';
import styles from './Tabs.module.scss';

interface TabsPropTypes {
  children: JSX.Element[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs: React.FC<TabsPropTypes> = (
  { activeTab, setActiveTab, children },
): JSX.Element => {
  const toggleStateHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    setActiveTab((event.target as HTMLInputElement).value);
  };

  const tabs = [];
  if (children) {
    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];
      const { key } = child;

      // Set initial active tab
      tabs.push(<Tab
        key={key}
        value={key}
        activeTab={activeTab}
        onClick={toggleStateHandler}
      />);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        {tabs}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Tabs;
