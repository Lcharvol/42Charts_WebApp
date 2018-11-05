import styled from 'styled-components';
import { BORDER_COLOR, MAIN_COLOR } from '../../constants/colors';

import LogoUI from '../../../../public/logo.svg';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(25, 25, 25);
`;

export const LoginContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  background-color: white;
  border: 1px ${BORDER_COLOR} solid;
  border-radius: 3px;
`;

export const Logo = styled.div`
    position:absolute;
    display:flex;
    background-image: url("${LogoUI}");
    background-size: cover;
    width:100%;
    height:230px;
    top:-127px;
`;

export const LoginButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 80%;
  background-color: ${MAIN_COLOR};
  height: 55px;
  border-radius: 3px;
  &:hover {
    opacity: 0.6;
  }
  cursor: pointer;
  font-size: 0.3em;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;
