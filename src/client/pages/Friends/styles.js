import styled from 'styled-components';

import { SIDE_MENU_TOTAL_WIDTH } from '../../containers/SideMenu/constants';
import { BACKGROUND_COLOR } from '../../constants/colors';
import POLY_BACKGROUND from '../../../../public/poly_background.jpg';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH}px);
  margin-left: ${SIDE_MENU_TOTAL_WIDTH}px;
  min-height: 100vh;
  overflow-y: scroll;
  @media (max-width: 1000px) {
    width: calc(100vw - 90px);
    margin-left: 90px;
  }
  box-sizing: border-box;
  overflow-y: hidden;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
  max-width: 1100px;
`;

export const UsersPrewiewContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 75px;
  @media (max-width: 1300px) {
    margin-top: 25px;
  }
  box-sizing: border-box;
`;
