import styled from 'styled-components';
import {
  MAIN_COLOR,
  TRANSPARENT_DARK_BACKGROUND,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 250px;
  height: 40px;
  background-color: ${TRANSPARENT_DARK_BACKGROUND};
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 5px;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  background-color: ${({ color }) => color};
  width: ${({ value }) => value}%;
  z-index: 100;
`;

export const Label = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  color: white;
  z-index: 200;
  font-size: 0.3em;
  user-select: none;
`;
