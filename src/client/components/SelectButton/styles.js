import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

import {
  LIGHT_BACKGROUND_COLOR,
  DARK_BORDER_COLOR,
  BACKGROUND_COLOR,
  FONT_COLOR,
  DARK_FONT_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${LIGHT_BACKGROUND_COLOR};
  border-radius: 3px;
  border: solid 1px ${DARK_BORDER_COLOR};
  cursor: pointer;
  &:hover {
    background-color: ${BACKGROUND_COLOR};
    border: solid 1px ${DARK_BORDER_COLOR};
  }
  z-index: 1000;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 30px;
  background-color: ${BACKGROUND_COLOR};
  border: solid 1px ${DARK_BORDER_COLOR};
  top: ${({ height }) => height}px;
  z-index: 1000;
`;

export const SelectedValue = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  font-size: 0.25em;
  padding-left: 15px;
  color: ${FONT_COLOR};
  user-select: none;
  opacity: 0.7;
`;

export const ChevIcon = styled(MdKeyboardArrowDown)`
  position: relative;
  display: flex;
  font-size: 0.4em;
  margin: 5px;
  opacity: 0.7;
  color: ${DARK_FONT_COLOR};
`;

export const Value = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.23em;
  color: ${FONT_COLOR};
  user-select: none;
  width: calc(100% - 15px);
  height: 25px;
  padding-left: 15px;
  &:hover {
    background-color: ${LIGHT_BACKGROUND_COLOR};
  }
`;

export const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
`;
