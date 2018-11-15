import React from 'react';
import { map } from 'ramda';
import { MenuContainer, MenuElemContainer, StyledLink, Logout } from './styles';
import menuElems from '../../constants/menuElems';

const MenuElem = ({ to, label, winWidth }) => (
  <MenuElemContainer>
    <StyledLink to={to}>{label}</StyledLink>
  </MenuElemContainer>
);

const Menu = ({ winWidth }) => (
  <MenuContainer>
    {winWidth > 1000 && map(menuElem => <MenuElem {...menuElem} />, menuElems)}
    {winWidth > 1000 && (
      <MenuElemContainer>
        <Logout
          onClick={() => {
            localStorage.setItem('chartsToken', '');
            window.location.replace('/login');
          }}
        >
          Logout
        </Logout>
      </MenuElemContainer>
    )}
  </MenuContainer>
);

export default Menu;
