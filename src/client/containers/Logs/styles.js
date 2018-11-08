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

export const Month = styled.div``;

export const Day = styled.div`
  position: relative;
  display: flex;
  width: 2%;
  height: ${({ value }) => value}%;
  background-color: ${MAIN_COLOR};
  margin-left: 5px;
  opacity: ${({ value }) => value / 100 + 0.1};
`;
