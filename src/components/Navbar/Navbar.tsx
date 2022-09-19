import React from 'react';
import styles from './Navbar.module.scss';

const NAVBAR_ITEMS: any[] = [
  {
    id: '01',
    name: 'About',
    link: '#',
  },
];

const Navbar = (): JSX.Element => (
  <nav className={styles.Navbar}>
    <div className={styles.logoBox}>
      <img className={styles.logo} src="./assets/logo.png" alt="logo" />
      Kevin Laird
    </div>
    <ul className={styles.items}>
      {NAVBAR_ITEMS.length !== 0
        && NAVBAR_ITEMS.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
    </ul>
  </nav>
);

export default Navbar;
