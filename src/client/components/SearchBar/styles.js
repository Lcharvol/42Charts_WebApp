import styled from 'styled-components';
import { MdSearch, MdClear } from 'react-icons/md';

import {
  LIGHT_BACKGROUND_COLOR,
  DARK_BORDER_COLOR,
  DARK_FONT_COLOR,
  BORDER_COLOR,
  MAIN_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  min-width: 175px;
  height: 25px;
  margin-left: ${({ margin }) => margin}px;
`;

export const Content = styled.input`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${LIGHT_BACKGROUND_COLOR};
  border-radius: 3px;
  border: solid 1px ${DARK_BORDER_COLOR};
  color: ${DARK_FONT_COLOR};
  padding-left: 10px;
  padding-right: 10px;
  &:focus {
    outline: none;
    border: solid 1px ${BORDER_COLOR};
  }
`;

export const SearchLogo = styled(MdSearch)`
  position: absolute;
  display: flex;
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-right: 10px;
  color: ${DARK_BORDER_COLOR};
  top: 3px;
  right: 5px;
`;

export const CrossButton = styled(MdClear)`
  position: absolute;
  display: flex;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 10px;
  color: ${MAIN_COLOR};
  top: 5px;
  right: 0px;
  &:hover {
    transform: rotate(90deg);
  }
  transition: all 0.3s ease-in-out;
`;
