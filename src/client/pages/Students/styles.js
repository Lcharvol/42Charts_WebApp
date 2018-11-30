import styled from 'styled-components';
import { MdRefresh } from 'react-icons/md';

import {
  MAIN_COLOR,
  DARK_MAIN_COLOR,
  BACKGROUND_COLOR,
} from '../../constants/colors';
import { SIDE_MENU_TOTAL_WIDTH } from '../../containers/SideMenu/constants';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH}px);
  margin-left: ${SIDE_MENU_TOTAL_WIDTH}px;
  min-height: 100vh;
  padding-left: 50px;
  overflow: hidden;
  @media (max-width: 1000px) {
    width: calc(100vw - 90px);
    margin-left: 90px;
  }
`;

export const Header = styled.div`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH + 50}px);
  @media (max-width: 1000px) {
    width: calc(100vw - ${140}px);
  }
  min-width: 550px;
  max-width: 1200px;
  top: 0;
  padding-top: 30px;
  padding-bottom: 40px;
  padding-right: 50px;
  background-color: ${BACKGROUND_COLOR};
`;

export const Title = styled.div`
  position: relative;
  margin-bottom: 15px;
  font-weight: light;
  user-select: none;
  background: linear-gradient(
    to bottom,
    ${MAIN_COLOR} 0%,
    ${DARK_MAIN_COLOR} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 430px;
  width: 100%;
`;

export const UsersPrewiewContainer = styled.div`
  position: relative;
  display: flex;
  width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH + 105}px);
  flex-direction: column;
  padding-bottom: 75px;
  padding-right: 15px;
  @media (max-width: 1300px) {
    margin-top: 25px;
  }
`;

export const VisibilitySensorBox = styled.div`
  position: absolute;
  bottom: ${({ bottom }) => bottom}px;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  min-width: 425px;
  height: 75px;
`;

export const RetryRequestContainer = styled.div`
  position: relative;
  bottom: 0px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-width: 425px;
  height: 75px;
`;

export const RetryRequest = styled(MdRefresh)`
  color: ${MAIN_COLOR};
  cursor: pointer;
  margin-top: 75px;
  &:hover {
    transform: rotate(180deg);
  }
  &:active {
    transform: rotate(540deg);
    transition: all 0.2s ease-in-out;
  }
  transition: all 0.3s ease-in-out;
`;
