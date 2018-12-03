import styled from 'styled-components';
import {
  MAIN_COLOR,
  DARK_MAIN_COLOR,
  LIGHT_BACKGROUND_COLOR,
  BACKGROUND_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 80px;
  background-color: ${LIGHT_BACKGROUND_COLOR};
  padding-left: 50px;
  padding-top: 10px;
  box-sizing: border-box;
  background-image: url('https://cdn.intra.42.fr/coalition/cover/2/alliance_background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  color: ${BACKGROUND_COLOR};
  font-weight: light;
  user-select: none;
`;
