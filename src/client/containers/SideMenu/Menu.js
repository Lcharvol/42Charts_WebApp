import React from 'react';
import { map } from 'ramda';
import { MenuContainer, MenuElemContainer, StyledLink } from './styles';
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
  </MenuContainer>
);

export default Menu;
