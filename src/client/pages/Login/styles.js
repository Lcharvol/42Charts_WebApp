import styled from 'styled-components';
import {
  BORDER_COLOR,
  MAIN_COLOR,
  BACKGROUND_COLOR,
  LIGHT_BACKGROUND_COLOR,
} from '../../constants/colors';

import LogoUI from '../../../../public/logo.svg';

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 250px;
  background-image: linear-gradient(
    ${LIGHT_BACKGROUND_COLOR},
    ${BACKGROUND_COLOR}
  );
  border-radius: 3px;
`;

export const Logo = styled.div`
    position:absolute;
    display:flex;
    background-image: url("${LogoUI}");
    background-size: cover;
    width:100%;
    height:230px;
    top:-126px;
`;

export const LoginButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${MAIN_COLOR};
  width: 80%;
  background-image: none;
  background-color: ${LIGHT_BACKGROUND_COLOR};
  height: 55px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.4em;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  top: 40px;
  &:hover {
    background-image: linear-gradient(rgb(35, 35, 35), rgba(30, 30, 30));
  }
  transition: all 0.2s ease-in-out;
  border: solid 1px ${MAIN_COLOR};
`;
