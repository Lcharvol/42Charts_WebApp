import styled from 'styled-components';

import POLY_BACKGROUND from '../../../../public/poly_background.jpg';
import { SIDE_MENU_TOTAL_WIDTH } from '../SideMenu/constants';
import { BACKGROUND_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: ${({ isWrapped }) => (isWrapped ? 'fixed' : 'relative')};
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  z-index: 1000;
  width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH}px);
  min-width: 550px;
  ${({ isWrapped }) => isWrapped && 'top: -230px;'}
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
  transition: top 0.3s ease-in-out;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH}px - 25px);
  padding-right: 50px;
  padding-left: 50px;
  padding-top: 35px;
  box-sizing: border-box;
`;

export const FakeHeader = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 320px;
`;
