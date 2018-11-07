import styled from 'styled-components';
import { BORDER_COLOR, LIGHT_GREY, MAIN_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: solid 1px ${BORDER_COLOR};
  background-color: white;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 3px;
  margin: 25px;
  overflow: hidden;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: ${LIGHT_GREY};
`;

export const Label = styled.div`
  position: relative;
  display: flex;
  font-size: 0.3em;
  margin-left: 10px;
  color: ${MAIN_COLOR};
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-y: scroll;
`;
