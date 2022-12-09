import React, { useState } from 'react';
import styles from './ContentTabs.module.scss';
import Tabs from './Tabs';

interface ContentObjectTypes {
  id: string,
  title: string,
  content: string;
}

interface ContentTabsPropTypes {
  content: ContentObjectTypes[];
}

const ContentTabs: React.FC<ContentTabsPropTypes> = (
  { content },
): JSX.Element => {
  const [activeTab, setActiveTab] = useState('t1');

  const returnData = content.map(
    (jsx: {
      id: string,
      title: string,
      content: string,
    }) => (
      <div
        className={
          `${activeTab === jsx.id ? styles.active : styles.inactive}`
        }
        key={jsx.id}
      >
        <h1>{jsx.title}</h1>
        <p>{jsx.content}</p>
      </div>
    ),
  );

  return (
    <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>{returnData}</Tabs>
  );
};

export default ContentTabs;
