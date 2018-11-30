import styled from 'styled-components';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';

import {
  MAIN_COLOR,
  DARK_TEXT_COLOR,
  FONT_COLOR,
  DARK_MAIN_COLOR,
} from '../../constants/colors';
import ChevronDownIcon from '../../../../public/chev_down.png';

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
  flex: 6;
`;

export const BottomSide = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 50px;
`;

export const UnitContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: ${({ width }) => width}%;
  height: 100%;
  &:hover {
    opacity: 1;
    transition: opacity 0s;
  }
  cursor: pointer;
`;

export const UnitContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: ${({ value }) => value}%;
  opacity: ${({ value }) => (value / 100) * 3};
  background-color: ${DARK_MAIN_COLOR};
  transition: height 0.4s ease-in-out, width 0.4s ease-in-out,
    opacity 0.4s ease-in-out;
  ${({ isHover }) => isHover && 'opacity: 1; transition: opacity 0s;'};
  background-image: linear-gradient(
    to bottom,
    ${MAIN_COLOR} 0%,
    ${DARK_MAIN_COLOR} 100%
  );
`;

export const TimeInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.3em;
  color: ${FONT_COLOR};
  opacity: 0.8;
  flex: 1;
  user-select: none;
`;

export const Arrows = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const LeftArrow = styled(MdChevronLeft)`
  position: relative;
  display: flex;
  align-items: flex-end;
  flex: 1;
  height: 25px;
  cursor: pointer;
  margin-right: 10px;
  color: ${MAIN_COLOR};
  &:hover {
    height: 40px;
  }
  transition: all 0.1s ease-in-out;
`;

export const RightArrow = styled(MdChevronRight)`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex: 1;
  height: 25px;
  cursor: pointer;
  margin-left: 10px;
  color: ${MAIN_COLOR};
  &:hover {
    height: 40px;
  }
  transition: all 0.1s ease-in-out;
`;

export const HoverValue = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5em;
  color: ${MAIN_COLOR};
  flex: 1;
  user-select: none;
`;
