import styled from 'styled-components';
import { MAIN_COLOR, DARK_TEXT_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TopSide = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-width: 100%;
  flex: 1;
`;

export const BottomSide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 100%;
  height: 30px;
`;

export const Unit = styled.div`
  position: relative;
  display: flex;
  width: ${({ width }) => width}%;
  height: ${({ value }) => value}%;
  background-color: ${MAIN_COLOR};
  opacity: ${({ value }) => value / 100 + 0.1};
  transition: height 0.4s ease-in-out, width 0.4s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const TimeInfo = styled.div`
  position: relative;
  display: flex;
  font-size: 0.3em;
  color: ${DARK_TEXT_COLOR};
  margin-left: 15px;
  opacity: 0.8;
`;
