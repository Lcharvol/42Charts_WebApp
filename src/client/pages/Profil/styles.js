import styled from 'styled-components';
import { MAIN_COLOR } from '../../constants/colors';

import PolyBackground from '../../../../public/poly_background.jpg';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 240px);
  margin-left: 240px;
  min-height: 100vh;
  padding-bottom: 25px;
  @media (max-width: 1000px) {
    width: calc(100vw - 90px);
    margin-left: 90px;
  }
  transition: width 0.2s ease-in;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: calc(100% - 35px);
`;
