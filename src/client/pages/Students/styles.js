import styled from 'styled-components';
import { MdRefresh } from 'react-icons/md';

import { MAIN_COLOR } from '../../constants/colors';
import { SIDE_MENU_TOTAL_WIDTH } from '../../containers/SideMenu/constants';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - ${SIDE_MENU_TOTAL_WIDTH}px);
  margin-left: ${SIDE_MENU_TOTAL_WIDTH}px;
  min-height: 100vh;
  @media (max-width: 1000px) {
    width: calc(100vw - 90px);
    margin-left: 90px;
  }
  box-sizing: border-box;
  min-width: 500px;
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

export const VisibilitySensorBox = styled.div`
  position: relative;
  bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 425px;
  min-height: 75px;
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
