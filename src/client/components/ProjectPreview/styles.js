import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { MdKeyboardArrowUp, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

import {
  DARK_FONT_COLOR,
  DARK_BORDER_COLOR,
  MAIN_COLOR,
  RED,
  LIGHT_BACKGROUND_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${DARK_FONT_COLOR};
  min-height: ${({ isWrapped }) => (isWrapped ? 40 : 300)}px;
  width: 100%;
  min-width: 600px;
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
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 400px;
  flex: 1;
`;

export const BottomSideLeft = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100px;
`;

export const BottomSideRight = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
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

export const MarkContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
  height: 15px;
  margin-right: 15px;
  background-color: ${LIGHT_BACKGROUND_COLOR};
  overflow: hidden;
`;

export const MarkContent = styled.div`
  position: absolute;
  display: flex;
  background-color: ${({ validated }) => (validated ? MAIN_COLOR : RED)};
  width: ${({ value }) => value}%;
  height: 100%;
`;

export const MarkLabel = styled.div`
  position: relative;
  color: ${MAIN_COLOR};
  margin-right: 15px;
`;

export const WrapperButton = styled.div`
  font-size: 1em;
  color: ${DARK_FONT_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    color: ${MAIN_COLOR};
  }
`;

export const UnWrapperIcon = styled(MdAdd)`
  font-size: 1.3em;
`;

export const WrapperIcon = styled(MdKeyboardArrowUp)`
  font-size: 1.3em;
`;

export const UnWrapperButton = styled(FaPlus)`
  font-size: 2em;
  color: ${DARK_FONT_COLOR};
`;

export const BottomSideElem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  flex: 1;
  box-sizing: border-box;
  min-height: 100%;
`;

export const BottomSideLabel = styled.div`
  position: relative;
  display: flex;
  font-size: 1em;
  color: ${DARK_FONT_COLOR};
`;

export const BottomSideValue = styled.div`
  position: relative;
  display: flex;
  color: ${MAIN_COLOR};
  font-size: 2em;
  font-weight: bold;
  flex: 1;
`;

export const DoughnutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin: 10px;
`;

export const DoughnutLabel = styled.div`
  position: relative;
  display: flex;
  color: ${DARK_FONT_COLOR};
  font-size: 1em;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FirstFinishLink = styled(Link)`
  text-decoration: none;
  color: ${DARK_FONT_COLOR};
`;
