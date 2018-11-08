import React from 'react';
import { map } from 'ramda';
import { MenuContainer, MenuElemContainer, StyledLink, Logout } from './styles';
import menuElems from '../../constants/menuElems';

const MenuElem = ({ to, label }) => (
  <MenuElemContainer>
    <StyledLink to={to}>{label}</StyledLink>
  </MenuElemContainer>
);

const Menu = () => (
  <MenuContainer>
    {map(
      menuElem => (
        <MenuElem {...menuElem} />
      ),
      menuElems,
    )}
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
  </MenuContainer>
);

export default Menu;
