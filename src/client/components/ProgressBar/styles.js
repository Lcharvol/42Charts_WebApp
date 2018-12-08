import styled from 'styled-components';
import { LIGHT_BACKGROUND_COLOR, MAIN_COLOR } from '../../constants/colors';

export const Container = styled.div`
    position;relative;
    display:flex;
    width:100%;
    height:30px;
    border-radius:3px;
    background-color:${LIGHT_BACKGROUND_COLOR};
    overflow:hidden;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  background-color: ${MAIN_COLOR};
  width: ${({ value }) => value}%;
  height: 100%;
  transition: all 0.3s ease-in-out;
`;
