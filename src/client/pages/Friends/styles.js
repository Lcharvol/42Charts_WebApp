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
  overflow: hidden;
  @media (max-width: 1000px) {
    width: calc(100vw - 90px);
    margin-left: 90px;
  }
  box-sizing: border-box;
`;

export const Header = styled.div`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  z-index: 1000;
  width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH}px);
  min-width: 550px;
  top: 0;
  left: ${SIDE_MENU_TOTAL_WIDTH}px;
  @media (max-width: 1000px) {
    width: calc(100vw - ${90}px);
    left: 90px;
  }
  background-color: ${BACKGROUND_COLOR};
  box-sizing: border-box;
  background-image:url('${POLY_BACKGROUND}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeaderContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH}px - 25px);
  padding-right: 50px;
  padding-left: 50px;
  padding-top: 35px;
  box-sizing: border-box;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 365px;
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
