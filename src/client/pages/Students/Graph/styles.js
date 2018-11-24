import styled from 'styled-components';
import { MAIN_COLOR, DARK_FONT_COLOR } from '../../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 100%;
  margin-bottom: 15px;
  min-width: 560px;
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

export const BarContainer = styled.div`
  position:relative;
  display:flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: ${({ valuesLength }) => 100 / valuesLength}%;
  height:100%;
  opacity: ${({ value }) => value * 20};
  transition: width 0.4s ease-in-out;
    opacity 0.4s ease-in-out;
  &:hover {
    opacity: ${({ value }) => (value * 20 > 0.9 ? 0.8 : 1)};
    transition: opacity 0s;
  }
  cursor: pointer;
`;

export const Bar = styled.div`
  position: relative;
  display: flex;
  height: ${({ value }) => value * 100}%;
  width: 100%;
  background-color: ${MAIN_COLOR};
  transition: height 0.4s ease-in-out;
`;

export const Label = styled.div`
  position: relative;
  display: flex;
`;

export const HoverContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 360px;
  top: 0;
  right: 0;
  user-select: none;
`;

export const HoverValue = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${MAIN_COLOR};
  font-size: 0.6em;
  margin-right: 10px;
  width: 80px;
`;

export const HoverLabel = styled.div`
  position: relative;
  display: flex;
  width: 280px;
  font-size: 0.4em;
  color: ${DARK_FONT_COLOR};
`;
