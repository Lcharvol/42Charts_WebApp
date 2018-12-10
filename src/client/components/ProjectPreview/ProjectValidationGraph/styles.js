import styled from 'styled-components';
import {
  LIGHT_BACKGROUND_COLOR,
  MAIN_COLOR,
  RED,
} from '../../../constants/colors';

export const Container = styled.div`
  =position: relative;
  display: flex;
  width: 60px;
  height: 60px;
  margin-left: 15px;
  background-color: ${LIGHT_BACKGROUND_COLOR};
  border-radius: 100%;
  ${({ successRate }) =>
    `background: conic-gradient(${MAIN_COLOR} ${successRate}%, ${LIGHT_BACKGROUND_COLOR} 0);`};
`;
