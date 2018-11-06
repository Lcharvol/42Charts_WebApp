import styled from 'styled-components';
import { MAIN_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 260px);
  margin-left: 240px;
  min-height: 100vh;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  background-color: rgb(25, 25, 25);
  justify-content: flex-start;
  align-items: flex-end;
  width: calc(100% - 25px);
  height: 300px;
  padding-left: 25px;
  padding-bottom: 25px;
`;

export const FullName = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-left: 15px;
  font-size: 0.6em;
  color: white;
`;
