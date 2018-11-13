import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 240px);
  margin-left: 240px;
  min-height: 100vh;
`;

export const TopSide = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 400px;
`;

export const BottomSide = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex: 1;
`;
