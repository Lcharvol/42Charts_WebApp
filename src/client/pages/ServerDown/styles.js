import styled from 'styled-components';
import { MAIN_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`;

export const Content = styled.div`
  postion: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 500px;
`;

export const Text = styled.div`
  position: relative;
  display: flex;
  color: ${MAIN_COLOR};
  font-size: 1em;
`;
