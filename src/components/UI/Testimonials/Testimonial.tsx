import React from 'react';
import styles from './Testimonial.module.scss';
import TestimonialCard from './TestimonialCard';

const DUMMY_JSON = {
  id: '01',
  name: 'Aviva Avnison',
  occupation: 'UW Professor of Interactive Media Design',
  profileImage: './assets/testimonial/aviva.png',
  profileAlt: 'Profile Picture of Aviva Avnison',
  content: `I had the pleasure of working 
  with Kevin across his two years at 
University of Washington Bothell's Interactive
 Media Design program, including during 
his last semester when he worked as the 
UI/UX Designer for his team's capstone project.
\nKevin is a talented designer with an exceptional work ethic. 
He is passionate about what he does, and it comes through 
not only in the high quality of work that he produces, 
but in the positive relationships he forges with the 
people he collaborates with. As a team player, 
Kevin is a good listener and compromiser, but he also 
isn't afraid to advocate for a position he strongly believes in.
 I am confident that Kevin will make a positive and 
valuable addition to any company or project he contributes to.`,
};

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
      <TestimonialCard
        id={DUMMY_JSON.id}
        name={DUMMY_JSON.name}
        occupation={DUMMY_JSON.occupation}
        profileImage={DUMMY_JSON.profileImage}
        profileAlt={DUMMY_JSON.profileAlt}
        content={DUMMY_JSON.content}
      />
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
        <img src="./assets/testimonial/aviva.png" alt="nav bubble audrena" />
      </li>
      <li>
        <img src="./assets/testimonial/wanda.jpg" alt="nav bubble audrena" />
      </li>
      <li>
        <img src="./assets/testimonial/tanzey.png" alt="nav bubble audrena" />
      </li>
    </ul>
  </div>
);

export default Testimonial;
