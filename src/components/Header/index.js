import React from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderContainer, List } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Teshuvah</h1>
      <List>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/biblia" activeClassName="active">
              Bíblia
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
        </ul>
      </List>
    </HeaderContainer>
  );
}
