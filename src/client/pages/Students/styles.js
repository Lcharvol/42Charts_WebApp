import styled from 'styled-components';

import { MAIN_COLOR } from '../../constants/colors';
import { SIDE_MENU_TOTAL_WIDTH } from '../../containers/SideMenu/constants';

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
`;

export const UsersPrewiewContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  padding-bottom: 75px;
`;

export const VisibilitySensorBox = styled.div`
  position: relative;
  bottom: 0px;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  min-width: 425px;
  height: 75px;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  color: ${MAIN_COLOR};
  margin-bottom: 25px;
  font-weight: bold;
  user-select: none;
`;

export const Header = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  width: calc(100vw - 390px);
  @media (max-width: 1000px) {
    width: calc(100vw - 205px);
  }
  max-width: 1200px;
  top: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  background: linear-gradient(
    to bottom,
    rgba(25, 25, 25, 1) 0%,
    rgba(25, 25, 25, 1) 1%,
    rgba(25, 25, 25, 1) 90%,
    rgba(25, 25, 25, 0.75) 95%,
    rgba(25, 25, 25, 0) 100%
  );
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 530px;
  width: 100%;
`;
