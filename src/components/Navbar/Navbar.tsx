import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Navbar.module.scss';
import NavbarFooter from './NavbarFooter';

const NAVBAR_ITEMS:
  { id: string, name: string, link: string; hashlink: boolean; }[] = [
    {
      id: '01',
      name: 'About',
      link: '/about',
      hashlink: false,
    },
    {
      id: '02',
      name: 'Projects',
      link: '/#projects',
      hashlink: true,
    },
  ];

const Navbar = (): JSX.Element => (
  <header className={styles.container}>
    <nav className={styles.navContainer}>
      <Link to="/" className={styles.logoBox}>
        <img className={styles.logo} src="./assets/logo.png" alt="logo" />
        Kevin Laird
      </Link>
      <ul className={styles.items}>
        {NAVBAR_ITEMS.length !== 0
          && NAVBAR_ITEMS.map((item) => (
            <li key={item.id}>
              {item.hashlink
                ? (
                  <HashLink to="/#projects" className={styles.logoBox}>
                    Projects
                  </HashLink>
                )
                : <Link to={item.link}>{item.name}</Link>}
            </li>
          ))}
      </ul>
    </nav>
    <NavbarFooter />
  </header>
);

export default Navbar;
