import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { MAIN_COLOR } from '../../constants/colors';
import { BADGE_CONTAINER_WIDTH, BADGE_CONTAINER_MARGIN } from './constans';

export const Container = styled.div`
  position: relative;
  display: flex;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  overflow: hidden;
  padding-left: 60px;
  padding-right: 60px;
  z-index: 99;
  margin-left: ${({ pos }) =>
    pos * -(BADGE_CONTAINER_WIDTH + 2 * BADGE_CONTAINER_MARGIN)}px;
  transition: margin-left 0.3s ease-in-out;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  top: 0;
  ${({ pos }) => `${pos}: 0;`} display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  min-width: 60px;
  cursor: pointer;
  box-sizing: border-box;
  z-index: 100;
`;

export const LeftArrowIcon = styled(MdChevronLeft)`
  color: ${MAIN_COLOR};
`;

export const RightArrowIcon = styled(MdChevronRight)`
  color: ${MAIN_COLOR};
`;

export const BadgeContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100%;
  margin-left: 10px;
  margin-right: 10px;
  min-width: 200px;
  max-width: 200px;
  background-color: rgba(150, 150, 150, 0.1);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0.5)};
  transition: opacity 0.3s ease-in-out;
`;
