import React from 'react';
import styles from './Testimonial.module.scss';

const Testimonial = (): JSX.Element => (
  <div>
    <div className={styles.slides}>
      <div className={`${styles.slideContainer} ${styles.slideLeft}`}>
        <img
          src="./assets/testimonial/audrena.jpg"
          alt="Left Slide Testimonial Profile"
          className={styles.slide}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.profileContainer}>
          <img
            className={styles.profile}
            src="./assets/testimonial/abe.jpg"
            alt="profile"
          />
        </div>
        <div className={styles.content}>
          <div>
            <p>{'I had the pleasure of working with Kevin across his two years at University of Washington Bothell\'s Interactive Media Design program, including during his last semester when he worked as the UI/UX Designer for his team\'s capstone project.'}</p>
            <p>{'Kevin is a talented designer with an exceptional work ethic. He is passionate about what he does, and it comes through not only in the high quality of work that he produces, but in the positive relationships he forges with the people he collaborates with. As a team player, Kevin is a good listener and compromiser, but he also isn\'t afraid to advocate for a position he strongly believes in. I am confident that Kevin will make a positive and valuable addition to any company or project he contributes to.'}</p>
          </div>
          <div>
            <h2>Abraham Avnisan</h2>
            <h3>University of Washington Professor</h3>
          </div>
        </div>
      </div>
      <div className={`${styles.slideContainer} ${styles.slideRight}`}>
        <img
          src="./assets/testimonial/wanda.jpg"
          alt="Right Slide Testimonial Profile"
          className={styles.slide}
        />
      </div>
    </div>
    <ul className={styles.nav}>
      <li>
        <img src="./assets/testimonial/audrena.jpg" alt="nav bubble audrena" />
      </li>
      <li className={styles.active}>
        <img src="./assets/testimonial/abe.jpg" alt="nav bubble audrena" />
      </li>
      <li>
        <img src="./assets/testimonial/wanda.jpg" alt="nav bubble audrena" />
      </li>
    </ul>
  </div>
);

export default Testimonial;
