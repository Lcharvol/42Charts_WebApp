import styled from 'styled-components';
import {
  HEADER_BACKGROUND_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_BACKGROUND_COLOR,
  DARK_BORDER_COLOR,
  MAIN_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: solid 1px ${DARK_BORDER_COLOR};
  background-color: ${LIGHT_BACKGROUND_COLOR};
  width: ${({ width }) => width};
  min-width: 405px;
  height: ${({ height }) => height};
  border-radius: 3px;
  margin: 25px;
  margin-bottom: 0;
  margin-right: 0;
  overflow: hidden;
  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${HEADER_BACKGROUND_COLOR};
  border-bottom: solid 1px ${DARK_BORDER_COLOR};
`;

export const HeaderLeftSide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 2;
  height: 100%;
  padding-right: 15px;
`;

export const HeaderLabel = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  flex: 1;
  font-size: 0.3em;
  color: ${MAIN_COLOR};
  padding-left: 25px;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  padding-top: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 40px;
`;
