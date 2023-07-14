import React from 'react';
import styles from './TestimonialSlider.module.scss';

interface TestimonialSliderTypes {
  src: string,
  alt: string;
  left?: boolean;
}

const TestimonialSlider: React.FC<TestimonialSliderTypes> = (
  {
    src, alt, left = false,
  },
): JSX.Element => (
  <div className={
    `${styles.slideContainer} 
    ${left ? styles.slideLeft : styles.slideRight}`
  }
  >
    <img
      src={src}
      alt={alt}
      className={styles.slide}
    />
  </div>
);

export default TestimonialSlider;
