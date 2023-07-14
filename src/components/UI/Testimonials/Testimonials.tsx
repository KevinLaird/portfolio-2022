import React from 'react';
import styles from './Testimonials.module.scss';
import TestimonialCard from './TestimonialCard';
import TestimonialSlider from './TestimonialSlider';
import TestimonialBubbleNav from './TestimonialBubbleNav';

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

const DUMMY_BUBBLES_JSON = [
  {
    src: './assets/testimonial/audrena.jpg',
    active: false,
    alt: 'nav bubble audrena',
  },
  {
    src: './assets/testimonial/aviva.png',
    active: true,
    alt: 'nav bubble audrena',
  },
  {
    src: './assets/testimonial/wanda.jpg',
    active: false,
    alt: 'nav bubble',
  },
  {
    src: './assets/testimonial/tanzey.png',
    active: false,
    alt: 'nav bubble',
  },
];

const Testimonials = (): JSX.Element => (

  <div>
    <div className={styles.slides}>
      <div className={`${styles.slideContainer} ${styles.slideLeft}`}>
        <TestimonialSlider
          src="./assets/testimonial/audrena.jpg"
          alt="Audrena Profile"
          left
        />
      </div>
      <TestimonialCard
        id={DUMMY_JSON.id}
        name={DUMMY_JSON.name}
        occupation={DUMMY_JSON.occupation}
        image={DUMMY_JSON.profileImage}
        alt={DUMMY_JSON.profileAlt}
        content={DUMMY_JSON.content}
      />
      <TestimonialSlider
        src="./assets/testimonial/audrena.jpg"
        alt="Audrena Profile"
      />
    </div>
    <TestimonialBubbleNav bubbles={DUMMY_BUBBLES_JSON} />
  </div>
);

export default Testimonials;
