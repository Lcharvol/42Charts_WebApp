import styled from 'styled-components';
import { MAIN_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 240px);
  margin-left: 240px;
  min-height: 100vh;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  background-color: rgb(25, 25, 25);
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  min-width: 450px;
  min-height: 200px;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

export const LeftSide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100%;
  padding: 15px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const RightSide = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex: 1;
  margin-right: 10px;
  padding: 15px;
  max-width: 500px;
  padding-left: 0px;
  @media (max-width: 1000px) {
    width: calc(100% - 30px);
    max-width: calc(100% - 30px);
    padding-left: 15px;
    padding-top: 0px;
  }
`;
