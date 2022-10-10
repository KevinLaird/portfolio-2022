import React from 'react';
import styles from './NavbarFooter.module.scss';

const DUMMY_CONTACT_DATA = [
  {
    id: 1,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kevinjohnlaird/',
  },
  {
    id: 2,
    name: 'GitHub',
    href: 'https://github.com/KevinLaird',

  },
  {
    id: 3,
    name: 'Email',
    href: 'mailto:contact@kevinlaird.me',
  },
];

const NavbarFooter = (): JSX.Element => (
  <footer className={styles.container}>
    {DUMMY_CONTACT_DATA.length !== 0
      && DUMMY_CONTACT_DATA.map((link) => (
        <address>
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.name}
          </a>
        </address>
      ))}
  </footer>
);

export default NavbarFooter;
