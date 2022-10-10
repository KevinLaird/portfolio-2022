import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Navbar.module.scss';
import NavbarFooter from './NavbarFooter';

const NAVBAR_ITEMS: any[] = [
  {
    id: '01',
    name: 'About',
    link: '/about',
  },
];

const Navbar = (): JSX.Element => (
  <header className={styles.container}>
    <nav className={styles.navContainer}>
      <HashLink to="/#projects" className={styles.logoBox}>
        <img className={styles.logo} src="./assets/logo.png" alt="logo" />
        Kevin Laird
      </HashLink>
      <ul className={styles.items}>
        {NAVBAR_ITEMS.length !== 0
          && NAVBAR_ITEMS.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
      </ul>
    </nav>
    <NavbarFooter />
  </header>
);

export default Navbar;
