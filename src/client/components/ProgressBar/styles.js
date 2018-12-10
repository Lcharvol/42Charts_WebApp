import styled from 'styled-components';
import {
  LIGHT_BACKGROUND_COLOR,
  MAIN_COLOR,
  DARK_FONT_COLOR,
  TRANSPARENT_DARK_BACKGROUND,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1100px;
  min-width: 250px;
  min-height: 45px;
  background-color: ${LIGHT_BACKGROUND_COLOR};
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 5px;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  background-color: ${MAIN_COLOR};
  width: ${({ value }) => value}%;
  height: 100%;
  transition: all 0.3s ease-in-out;
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
