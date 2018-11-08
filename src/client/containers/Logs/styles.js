import styled from 'styled-components';
import { MAIN_COLOR } from '../../constants/colors';

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
  transition: all 0.4s ease-in-out;
`;
