import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  SIDE_MENU_COLOR,
  BORDER_COLOR,
  DARK_TEXT_COLOR,
  MAIN_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: ${SIDE_MENU_COLOR};
  height: 100vh;
  top: 0;
  left: ${({ hidden }) => (hidden ? -250 : 0)}px;
  padding-top: 50px;
  padding-right: 20px;
  padding-left: 20px;
  border-right: 1px ${BORDER_COLOR} solid;
  z-index: 10000;
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
  color: ${DARK_TEXT_COLOR};
  &:hover {
    color: ${MAIN_COLOR};
  }
`;

export const Login = styled.div`
  display: flex;
  color: ${DARK_TEXT_COLOR};
  font-size: 0.4em;
  margin-bottom: 15px;
`;
