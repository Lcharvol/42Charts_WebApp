import React from 'react';
import { map } from 'ramda';
import {
  MenuContainer,
  MenuElemContainer,
  StyledLink,
  Logout,
  LogoContainer,
  LogoutLogo,
} from './styles';
import menuElems from '../../constants/menuElems';
import {
  MAIN_COLOR,
  DARK_FONT_COLOR,
  DARK_BORDER_COLOR,
} from '../../constants/colors';

const MenuElem = ({
  to,
  label,
  winWidth,
  selectedLink,
  handleChangeSelectedLink,
}) => (
  <MenuElemContainer onClick={() => handleChangeSelectedLink(to)}>
    <StyledLink
      to={to}
      color={to === selectedLink ? MAIN_COLOR : DARK_FONT_COLOR}
    >
      {label}
    </StyledLink>
  </MenuElemContainer>
);

const Menu = ({ winWidth, selectedLink, handleChangeSelectedLink }) => (
  <MenuContainer>
    {winWidth > 1000 &&
      map(
        menuElem => (
          <MenuElem
            {...menuElem}
            selectedLink={selectedLink}
            handleChangeSelectedLink={handleChangeSelectedLink}
          />
        ),
        menuElems,
      )}
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
    {winWidth <= 1000 &&
      map(
        menuElem => (
          <LogoContainer
            {...menuElem}
            color={
              menuElem.to === selectedLink ? MAIN_COLOR : DARK_BORDER_COLOR
            }
            onClick={() => handleChangeSelectedLink(menuElem.to)}
          >
            {menuElem.logo}
          </LogoContainer>
        ),
        menuElems,
      )}
    {winWidth <= 1000 && (
      <LogoutLogo
        onClick={() => {
          localStorage.setItem('chartsToken', '');
          window.location.replace('/login');
        }}
      />
    )}
  </MenuContainer>
);

export default Menu;
