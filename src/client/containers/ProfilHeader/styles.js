import styled from 'styled-components';

import { RESPONSIVITY_WIDTH } from './constants';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap:no-wrap;
  background-color: rgb(25, 25, 25);
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(100% - 15px);
  min-width: 460px;
  @media (max-width: ${RESPONSIVITY_WIDTH}px) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
    background-image:url('${({ backgroundUrl }) => backgroundUrl}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top:25px;
`;

export const LeftSide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
  @media (max-width: ${RESPONSIVITY_WIDTH}px) {
    width: 100%;
    align-items: flex-start;
  }
  box-sizing: border-box;
`;

export const RightSide = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding: 25px;
  padding-left: 0;
  @media (max-width: ${RESPONSIVITY_WIDTH}px) {
    min-width: 100%;
    padding-left: 25px;
    padding-top: 0px;
  }
  flex: 1;
  box-sizing: border-box;
`;

export const InlineBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const ColumnBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  min-height: 165px;
  flex: 1;
`;

export const ButtonsContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;
