import styled from 'styled-components';
import { BACKGROUND_COLOR, BORDER_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${BACKGROUND_COLOR};
`;

export const LoginContent = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  height: 500px;
  background-color: white;
  border: 1px ${BORDER_COLOR} solid;
  border-radius: 3px;
`;
