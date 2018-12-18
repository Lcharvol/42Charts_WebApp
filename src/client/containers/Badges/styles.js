import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { MAIN_COLOR, DARK_FONT_COLOR } from '../../constants/colors';
import { BADGE_CONTAINER_WIDTH, BADGE_CONTAINER_MARGIN } from './constans';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 60px;
  padding-right: 60px;
  z-index: 99;
  max-width: ${({ nbBadgeVisible }) => nbBadgeVisible * 220}px;
`;

export const MovingContent = styled.div`
  position: relative;
  display: flex;
  margin-left: ${({ pos }) =>
    pos * -(BADGE_CONTAINER_WIDTH + 2 * BADGE_CONTAINER_MARGIN)}px;
  height: 100%;
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 300px;
  margin-left: 10px;
  margin-right: 10px;
  min-width: 200px;
  max-width: 200px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0.5)};
  ${({ isVisible }) =>
    !isVisible &&
    'transform: scale(0.8);'} transition: opacity 0.3s ease-in-out, transform 0.1s linear;
  transition-delay: 0.1s;
  transition-property: transform;
  box-sizing: border-box;
  height: 100%;
`;

export const BadgesLabel = styled.div`
  color: ${DARK_FONT_COLOR};
  font-size: 0.4em;
`;

export const BadgesValue = styled.div`
  position: relative;
  display: flex;
  color: ${MAIN_COLOR};
  font-size: 0.5em;
`;

export const BadgeIcon = styled.div`
  position:relative;
  display:flex;
  width:130px;
  height:150px;
  background-image:url('${({ icon }) => icon}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;
