import styled from 'styled-components';

import { SIDE_MENU_TOTAL_WIDTH } from '../../containers/SideMenu/constants';
import {
  MAIN_COLOR,
  DARK_MAIN_COLOR,
  BACKGROUND_COLOR,
} from '../../constants/colors';

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
  padding-right: 75px;
  background-color: ${BACKGROUND_COLOR};
`;

export const UsersPrewiewContainer = styled.div`
  position: relative;
  display: flex;
  width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH + 105}px);
  flex-direction: column;
  padding-bottom: 75px;
  min-width: 650px;
  padding-right: 15px;
  @media (max-width: 1300px) {
    margin-top: 25px;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 430px;
  width: 100%;
`;
