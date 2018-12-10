import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

import {
  DARK_FONT_COLOR,
  DARK_BORDER_COLOR,
  MAIN_COLOR,
  RED,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${DARK_FONT_COLOR};
  min-height: ${({ isWrapped }) => (isWrapped ? 40 : 150)}px;
  width: 100%;
  font-size: 0.3em;
  border-bottom: solid 1px ${DARK_BORDER_COLOR};
  transition: min-height 0.3s ease-in-out;
`;

export const TopSide = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BottomSide = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const ProjectInfos = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const ProjectName = styled.div`
  positon: relative;
  display: flex;
`;

export const TierLabel = styled.div`
  position: relative;
  display: flex;
  color: ${MAIN_COLOR};
`;

export const MyMark = styled.div`
  position: relative;
  display: flex;
  color: ${({ validated }) => (validated ? MAIN_COLOR : RED)};
  margin-right: 25px;
`;

export const WrapperButton = styled(FaPlus)`
  font-size: 1em;
  color: ${DARK_FONT_COLOR};
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    color: ${MAIN_COLOR};
  }
`;

export const UnWrapperButton = styled(FaPlus)`
  font-size: 2em;
  color: ${DARK_FONT_COLOR};
`;
