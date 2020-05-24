import React from 'react';
import { FaGithub } from 'react-icons/fa';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>&copy; Teshuvah</span>
      <a
        href="https://github.com/titenq/teshuvah"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub color="#fff" size={28} />
      </a>
    </footer>
  );
};

export default Footer;
