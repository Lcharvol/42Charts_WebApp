import styled from 'styled-components';
import { MAIN_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 500px;
  height: 40px;
  background-color: rgb(15, 15, 15);
  border-radius: 3px;
  margin: 5px;
  overflow: hidden;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  background-color: ${MAIN_COLOR};
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
`;
