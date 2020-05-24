import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';

import { HeaderContainer, List, Hamburger, Overlay } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Hamburger>
        <FaBars />
      </Hamburger>
      <Overlay />
      <h1>Teshuvah</h1>
      <List>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/biblia" exact activeClassName="active">
              Bíblia
            </NavLink>
          </li>
          <li>
            <NavLink to="/parashat" exact activeClassName="active">
              Parashat
            </NavLink>
          </li>
          <li>
            <NavLink to="/dicionario" exact activeClassName="active">
              Dicionário
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" exact activeClassName="active">
              Login
            </NavLink>
          </li>
        </ul>
      </List>
    </HeaderContainer>
  );
}
