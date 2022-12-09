import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCaretRight } from 'react-icons/rx';
import styles from './About.module.scss';

import ContentTabs from '../components/UI/Tabs/ContentTabs';
import Testimonial from '../components/UI/Testimonials/Testimonial';

const DUMMY_JSX: { id: string, title: string, content: string; }[] = [
  {
    id: 't1',
    title: 'Title 1',
    content: 'Content',
  },
  {
    id: 't2',
    title: 'Title 2',
    content: 'Content',
  },
  {
    id: 't3',
    title: 'Title 2',
    content: 'Content',
  },
  {
    id: 't4',
    title: 'Title 2',
    content: 'Content',
  },
  {
    id: 't5',
    title: 'Title 2',
    content: 'Content',
  },
  {
    id: 't6',
    title: 'Title 2',
    content: 'Content',
  },
];

const About = (): JSX.Element => {
  const [tabSelect, setTabSelect] = useState(0);

  const updateTabSelectionHandler = (): void => {
    if (tabSelect === 0) {
      setTabSelect(1);
    } else {
      setTabSelect(0);
    }
  };

  const bio = (
    <div className={styles.textContent}>
      <h2>Lorem, ipsum.</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis alias assumenda numquam consectetur veniam accusamus.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis neque praesentium mollitia temporibus officia.</p>
    </div>
  );

  const resume = (
    <>
      <div className={styles.resume}>
        <div className={styles.resumeItem}>
          <h3 className={styles.resumeDate}>
            Jan 2021 - Mar 2022
          </h3>
          <div className={styles.resumePosition}>
            <h3>Cloud Support Engineer</h3>
            <p>Hostwinds LLC</p>
          </div>
        </div>
        <div className={styles.resumeItem}>
          <h3 className={styles.resumeDate}>
            Jan 2021 - Mar 2022
          </h3>
          <div className={styles.resumePosition}>
            <h3>Cloud Support Engineer</h3>
            <p>Hostwinds LLC</p>
          </div>
        </div>
      </div>
      <Link
        to="./assets/resume.pdf"
        target="_blank"
        download
        className={styles.resumeDownload}
      >
        Download Resume
        <RxCaretRight size={28} />
      </Link>
      {/* <button type="button"  /> */}
    </>
  );

  return (
    <>
      <div className={styles.container}>
        <img
          src="./assets/profile-picture.jpg"
          alt="profile"
          className={styles.profile}
        />
        <div className={styles.content}>
          <div className={styles.tab}>
            <button
              type="button"
              className={
                tabSelect === 0 ? styles.active : ''
              }
              onClick={updateTabSelectionHandler}
            >
              Bio
            </button>
            <button
              type="button"
              className={
                tabSelect === 1 ? styles.active : ''
              }
              onClick={updateTabSelectionHandler}
            >
              Resume
            </button>
          </div>
          {tabSelect === 0 ? bio : resume}
        </div>
      </div>
      <Testimonial />
    </>
  );
};

export default About;
