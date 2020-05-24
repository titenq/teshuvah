import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.hamburguer}>
        <FaBars />
      </div>
      <div className={styles.overlay}></div>
      <label className={styles.label}>Teshuvah</label>
      <nav className={styles.list}>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={styles.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/biblia" exact activeClassName={styles.active}>
              Bíblia
            </NavLink>
          </li>
          <li>
            <NavLink to="/parashat" exact activeClassName={styles.active}>
              Parashat
            </NavLink>
          </li>
          <li>
            <NavLink to="/dicionario" exact activeClassName={styles.active}>
              Dicionário
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" exact activeClassName={styles.active}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
