import React from 'react';
import styles from './TestimonialCard.module.scss';

interface TestimonialCardTypes {
  id: string,
  name: string,
  occupation: string;
  image: string;
  alt: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardTypes> = (
  {
    id, name, occupation, image, alt, content,
  },
): JSX.Element => (
  <div id={id}>
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <img
          className={styles.profile}
          src={image}
          alt={alt}
        />
      </div>
      <div className={styles.content}>
        <div>
          <p>{content}</p>
        </div>
        <div>
          <h2>{name}</h2>
          <h3>{occupation}</h3>
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
