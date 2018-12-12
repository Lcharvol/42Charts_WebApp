import styled from 'styled-components';

import { TRANSPARENT_DARK_BACKGROUND } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  margin-left: 10px;
`;

export const ColationIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  margin: 10px;
  cursor: pointer;

  box-shadow: 0px 0px 0px 2px ${({ color }) => color} inset;
  box-sizing: border-box;
`;

export const CoaltionIconInner = styled.div`
  position: relative;
  display: flex;
  min-width: 10px;
  min-height: 10px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
`;
