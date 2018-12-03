import styled from 'styled-components';
import { isNil } from 'ramda';
import {
  MAIN_COLOR,
  TRANSPARENT_DARK_BACKGROUND,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 250px;
  min-height: 45px;
  background-color: ${TRANSPARENT_DARK_BACKGROUND};
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 5px;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  background: ${({ color, gradientColor }) =>
    isNil(gradientColor) ? color : gradientColor};
  width: ${({ value }) => value}%;
  z-index: 100;
  transition: width 0.3s ease-in-out;
`;

export const Label = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  color: white;
  z-index: 200;
  font-size: 0.33em;
  user-select: none;
`;
