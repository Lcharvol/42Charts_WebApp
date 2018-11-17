import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  background-color: rgb(25, 25, 25);
  justify-content: flex-start;
  align-items: flex-end;
  width: calc(100% - 15px);
  min-width: 460px;
  min-height: 200px;
  padding-top: 25px;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
    background-image:url('${({ backgroundUrl }) => backgroundUrl}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const LeftSide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100%;
  padding: 25px;
  flex: 1;
  @media (max-width: 1000px) {
    width: calc(100% - 50px);
  }
`;

export const RightSide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 25px;
  padding-left: 0;
  max-width: 600px;
  @media (max-width: 1000px) {
    width: calc(100% - 50px);
    max-width: calc(100%);
    padding-left: 25px;
    padding-top: 0px;
  }
  flex: 1;
`;
