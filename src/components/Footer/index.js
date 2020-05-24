import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { FooterContainer } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <span>&copy; Teshuvah</span>
      <a
        href="https://github.com/titenq/teshuvah"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub color="#fff" size={28} />
      </a>
    </FooterContainer>
  );
}
