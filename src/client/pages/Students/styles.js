import styled from 'styled-components';
import {
  MAIN_COLOR,
  LIGHT_GREY,
  BACKGROUND_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 315px);
  margin-left: 240px;
  min-height: 100vh;
  padding-left: 75px;
  overflow-y: scroll;
`;

export const UsersPrewiewContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const VisibilitySensorBox = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  width: 100%;
  height: 75px;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  color: ${MAIN_COLOR};
  margin-bottom: 25px;
  font-weight: bold;
`;

export const Header = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  width: calc(100vw - 390px);
  top: 0;
  padding-top: 30px;
  background: linear-gradient(
    to bottom,
    rgba(25, 25, 25, 1) 0%,
    rgba(25, 25, 25, 1) 1%,
    rgba(25, 25, 25, 1) 64%,
    rgba(25, 25, 25, 1) 90%,
    rgba(25, 25, 25, 0) 100%
  );
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 500px;
  width: 100%;
`;
