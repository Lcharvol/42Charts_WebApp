import styled from 'styled-components';
import {
  RED,
  DARK_BORDER_COLOR,
  LIGHT_BACKGROUND_COLOR,
  MAIN_COLOR,
  DARK_FONT_COLOR,
  BACKGROUND_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10010;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;
  min-height: 200px;
  background-color: ${LIGHT_BACKGROUND_COLOR};
  border: solid 1px ${DARK_BORDER_COLOR};
  border-radius: 3px;
  box-sizing: border-box;
`;

export const ButtonsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`;

export const Button = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color: ${({ color }) => color};
  border-radius: 3px;
  font-size: 0.3em;
  margin: 15px;
  user-select: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  transition: all 0.1s ease-in-out;
`;

export const Label = styled.div`
  color: ${DARK_FONT_COLOR};
  font-size: 0.3em;
  margin-left: 15px;
  margin-top: 15px;
`;

export const StyledInput = styled.input`
  position: relative;
  width: 80%;
  background-color: ${BACKGROUND_COLOR};
  border-radius: 3px;
  height: 40px;
  border: solid 1px ${DARK_BORDER_COLOR};
  align-self: center;
  margin-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  color: ${DARK_FONT_COLOR};
`;
