import styled from 'styled-components';
import { SIDE_MENU_TOTAL_WIDTH } from '../../containers/SideMenu/constants';
import {
  MAIN_COLOR,
  BACKGROUND_COLOR,
  DARK_MAIN_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH}px);
  margin-left: ${SIDE_MENU_TOTAL_WIDTH}px;
  min-height: 100vh;
  padding-left: 75px;
  overflow-y: scroll;
  @media (max-width: 1000px) {
    width: calc(100vw - 90px);
    margin-left: 90px;
  }
  background-color: ${BACKGROUND_COLOR};
`;

export const Header = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1000;
  width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH + 105}px);
  @media (max-width: 1000px) {
    width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH}px);
  }
  min-width: 650px;
  top: 0;
  padding-top: 30px;
  padding-bottom: 40px;
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

export const AppsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH + 105}px);
  @media (max-width: 1000px) {
    width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH}px);
  }
  margin-top: 200px;
`;

export const HeaderTop = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100px;
`;

export const HeaderBottom = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
