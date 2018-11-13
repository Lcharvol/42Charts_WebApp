import styled from 'styled-components';
import { MAIN_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const TopSide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  width: 100%;
`;

export const BottomSide = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
`;

export const Bar = styled.div`
  position: relative;
  display: flex;
  height: ${({ value }) => value * 300}%;
  min-width: ${({ valuesLength }) => 100 / valuesLength}%;
  background-color: ${MAIN_COLOR};
  opacity: ${({ value }) => value * 20};
  &:hover {
    opacity: 0.9;
  }
`;

export const Label = styled.div`
  position: relative;
  display: flex;
`;
