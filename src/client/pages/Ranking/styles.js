import styled from 'styled-components';
import { MAIN_COLOR, LIGHT_GREY } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100% - 335px);
  margin-left: 240px;
  min-height: 100vh;
  padding-left: 75px;
`;

export const UsersPrewiewContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const VisibilitySensorBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 75px;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  color: ${MAIN_COLOR};
  margin-bottom: 25px;
  opacity: 0.8;
`;

export const Header = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 1000;
  width: 100%;
  top: 0;
  padding-top: 30px;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;
