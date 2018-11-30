import styled from 'styled-components';

import {
  DARK_BORDER_COLOR,
  MAIN_COLOR,
  DARK_FONT_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  padding: 10px;
  padding-top: 0px;
  box-sizing: border-box;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const WeekSummaryElem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const WeekSummaryLabel = styled.div`
  positon: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${DARK_FONT_COLOR};
  font-size: 0.25em;
  padding-left: 25px;
`;

export const WeekSummaryValue = styled.div`
  positon: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  color: ${MAIN_COLOR};
  flex: 1;
  font-size: 0.35em;
`;

export const Spacer = styled.div`
  position:relative;
  display:flex
  width:100%;
  min-height:25px;
`;
