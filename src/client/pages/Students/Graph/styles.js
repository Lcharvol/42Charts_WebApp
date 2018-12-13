import styled from 'styled-components';
import {
  MAIN_COLOR,
  DARK_FONT_COLOR,
  DARK_MAIN_COLOR,
} from '../../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 95%;
  margin-bottom: 15px;
  min-width: 560px;
  max-width: 1200px;
`;

export const TopSide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100%;
  width: 100%;
`;

export const BottomSide = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
  min-height: 20px;
  padding-top: 10px;
`;

export const BarContainer = styled.div`
  position:relative;
  display:flex;
  justify-content: center;
  align-items: flex-end;
  flex:1;
  height:100%;
  transition: width 0.4s ease-in-out;
    opacity 0.4s ease-in-out;
  cursor: pointer;
`;

export const Bar = styled.div`
  position: relative;
  display: flex;
  height: ${({ value }) => Math.floor(value * 100 < 100 ? value * 100 : 100)}%;
  flex: 1;
  transition: height 0.4s ease-in-out;
  background-color: ${DARK_MAIN_COLOR};
  background-image: linear-gradient(
    to bottom,
    ${MAIN_COLOR} 0%,
    ${DARK_MAIN_COLOR} 100%
  );
`;

export const BarShadow = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    ${({ value, isHover }) => (isHover ? 0 : 0.3 - value)}
  );
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
  font-size: 0.4em;
  color: ${DARK_FONT_COLOR};
`;

export const AbscisaLabel = styled.div`
  position: relative;
  display: flex;
  color: ${DARK_FONT_COLOR};
  font-size: 0.25em;
  flex: 1;
  opacity: 0.5;
`;
