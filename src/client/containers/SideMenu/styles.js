import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  SIDE_MENU_COLOR,
  BORDER_COLOR,
  LIGHT_BACKGROUND_COLOR,
  DARK_TEXT_COLOR,
  MAIN_COLOR,
  DARK_MAIN_COLOR,
  BACKGROUND_COLOR,
  DARK_BORDER_COLOR,
  FONT_COLOR,
  DARK_FONT_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 200px;
  background-image: linear-gradient(${BACKGROUND_COLOR}, rgb(30, 30, 30));
  height: 100vh;
  top: 0;
  left: ${({ hidden }) => (hidden ? -250 : 0)}px;
  padding-top: 50px;
  padding-right: 20px;
  padding-left: 20px;
  border-right: 1px ${DARK_BORDER_COLOR} solid;
  z-index: 10000;
  @media (max-width: 1000px) {
    width: 50px;
  }
  transition: left 0.3s eas-n-out;
`;

export const SideMenuHeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
`;

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
`;

export const MenuElemContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-left: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  position: relative;
  font-size: 0.3em;
  text-decoration: none;
  width: 100%;
  height: 100%;
  transition: color 0.1s ease-in;
  color: ${DARK_FONT_COLOR};
  opacity: 0.8;
  &:hover {
    color: ${MAIN_COLOR};
  }
`;

export const Login = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${MAIN_COLOR};
  font-size: 0.4em;
  margin-bottom: 15px;
  opacity: 0.9;
  text-decoration: none;
`;

export const Logout = styled.div`
  position: relative;
  font-size: 0.3em;
  text-decoration: none;
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in;
  color: ${DARK_FONT_COLOR};
  opacity: 0.8;
  &:hover {
    opacity: 0.5;
  }
  cursor: pointer;
`;
