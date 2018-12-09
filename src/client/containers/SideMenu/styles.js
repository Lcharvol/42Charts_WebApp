import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdPowerSettingsNew } from 'react-icons/md';

import {
  MAIN_COLOR,
  BACKGROUND_COLOR,
  DARK_BORDER_COLOR,
  DARK_FONT_COLOR,
  FONT_COLOR,
  LIGHT_BACKGROUND_COLOR,
} from '../../constants/colors';
import { SIDE_MENU_WIDTH, SIDE_MENU_PADDING } from './constants';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: ${SIDE_MENU_WIDTH}px;
  background-image: linear-gradient(
    ${BACKGROUND_COLOR},
    ${LIGHT_BACKGROUND_COLOR}
  );
  height: 100vh;
  min-height: 710px;
  top: 0;
  left: ${({ hidden }) => (hidden ? -250 : 0)}px;
  padding-right: ${SIDE_MENU_PADDING}px;
  padding-left: ${SIDE_MENU_PADDING}px;
  border-right: 1px ${DARK_BORDER_COLOR} solid;
  z-index: 10000;
  @media (max-width: 1000px) {
    width: 90px;
  }
  transition: left 0.3s ease-n-out;
`;

export const SideMenuHeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 60px;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    justify-content: center;
    align-items: center;
  }
`;

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const MenuElemContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: ${({ selected }) =>
    selected ? LIGHT_BACKGROUND_COLOR : 'transparent'};
  &:hover {
    background-color: ${LIGHT_BACKGROUND_COLOR};
  }
`;

export const SelectedLinkContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 45px;
  top: ${({ pos }) => pos * 45}px;
  transition: top 0.3s ease-in-out;
`;

export const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.3em;
  text-decoration: none;
  width: 100%;
  height: 100%;
  transition: color 0.1s ease-in;
  color: ${({ color }) => color};
  opacity: 1;
  &:hover {
    color: ${MAIN_COLOR};
  }
  user-select: none;
  margin-left: 25px;
`;

export const LeftBar = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 5px;
  background-color: ${MAIN_COLOR};
  margin-right: 20px;
`;

export const Login = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${FONT_COLOR};
  font-size: 0.3em;
  margin-bottom: 15px;
  text-decoration: none;
  user-select: none;
  opacity: 0.8;
`;

export const Logout = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  user-select: none;
  margin-left: 25px;
`;

export const LogoContainer = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 75px;
  margin-top: 10px;
  color: ${({ color }) => color};
  &:hover {
    color: ${MAIN_COLOR};
  }
  transition: color 0.1s ease-in;
`;

export const LogoutLogo = styled(MdPowerSettingsNew)`
  position: relative;
  display: flex;
  width: 80%;
  margin-top: 20px;
  color: ${DARK_BORDER_COLOR};
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
  transition: color 0.1s ease-in;
`;
