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
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  border-radius: 3px;
  margin: ${({ margin }) => margin};
  margin-bottom: 0;
  margin-right: 0;
  overflow: hidden;
  @media (max-width: 1280px) {
    width: 100%;
  }
  box-sizing: border-box;
  transition: height 0.3s ease-in-out;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40px;
  max-height: 40px;
  background-color: ${HEADER_BACKGROUND_COLOR};
  border-bottom: solid 1px ${DARK_BORDER_COLOR};
`;

export const HeaderRightSide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  height: 100%;
  padding-right: 10px;
`;

export const HeaderLabel = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  flex: 2;
  font-size: 0.3em;
  color: ${MAIN_COLOR};
  user-select: none;
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
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40px;
  color: ${MAIN_COLOR};
  font-size: 0.4em;
`;
