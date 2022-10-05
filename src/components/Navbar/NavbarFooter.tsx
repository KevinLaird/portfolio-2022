import React from 'react';
import styles from './NavbarFooter.module.scss';

const DUMMY_CONTACT_DATA = [
  {
    id: 1,
    name: 'LinkedIn',
    href: 'linked.in',
  },
  {
    id: 2,
    name: 'Email',
    href: 'linked.in',
  },
  {
    id: 3,
    name: 'GitHub',
    href: 'linked.in',
  },
];

const NavbarFooter = (): JSX.Element => (
  <div className={styles.container}>
    {DUMMY_CONTACT_DATA.length !== 0
      && DUMMY_CONTACT_DATA.map((link) => (
        <a
          key={link.id}
          href={link.href}
        >
          {link.name}
        </a>
      ))}
  </div>
);

export default NavbarFooter;
