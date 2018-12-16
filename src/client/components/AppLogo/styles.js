import styled from 'styled-components';

import logo from '../../../../public/logo.svg';
import { BACKGROUND_COLOR, MAIN_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 160px;
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
  background-color: rgba(14, 80, 44, ${({ opacity }) => opacity});
  background-image: linear-gradient(
    ${BACKGROUND_COLOR} 20%,
    rgba(0, 0, 0, 0) 100%
  );
  transition: background-color 0.6s ease-in-out;
  opacity: 0.7;
`;

export const FakeTopSide = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
  background-image: linear-gradient(
    transparent ${({ size }) => size}%,
    rgba(0, 0, 0, 0) 100%
  );
  transition: background-color 1s;
  transition-delay: all ${({ delay }) => delay}s;
  opacity: 0.9;
`;

export const BottomSide = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
  background-image: linear-gradient(rgb(27, 27, 27), transparent);
  border-top: solid 1px rgba(14, 80, 44, ${({ opacity }) => opacity});
  transition: border-top 0.6s ease-in-out;
`;
