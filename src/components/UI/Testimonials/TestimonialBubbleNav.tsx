import React from 'react';
import styles from './TestimonialBubbleNav.module.scss';

interface bubbleTypes {
  src: string,
  alt: string,
  active?: boolean,
}

interface TestimonialBubbleNavTypes {
  bubbles: bubbleTypes[];
}

const TestimonialBubbleNav: React.FC<TestimonialBubbleNavTypes> = (
  {
    bubbles,
  },
): JSX.Element => (
  <ul className={styles.nav}>
    {bubbles.map((bubble) => (
      <li className={bubble.active ? styles.active : ''}>
        <img src={bubble.src} alt={bubble.alt} />
      </li>
    ))}
  </ul>
);

export default TestimonialBubbleNav;
