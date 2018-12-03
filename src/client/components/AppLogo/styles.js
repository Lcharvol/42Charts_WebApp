import styled from 'styled-components';

import logo from '../../../../public/logo.svg';
import { MAIN_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
`;

export const LogoContainer = styled.div`
    position:absolute;
    display:flex;
    width:100px;
    height:100px;
    background-image:url('${logo}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 1000px) {
      width:70px;
      height:70px;
    };
    z-index:1000;
`;

export const TopSide = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
  background-color: ${MAIN_COLOR};
  opacity: 0.5;
`;

export const BottomSide = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
`;

export const OptionButton = styled.div`
  position: relative;
  display: flex;
`;
