import styled from 'styled-components';
import {
  BORDER_COLOR,
  MAIN_COLOR,
  DARK_BORDER_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: calc(100% - 50px);
  padding: 25px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StatContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(45, 45, 45, 0.3);
  border: solid 1px ${DARK_BORDER_COLOR};
  min-width: 175px;
  flex: 1;
  height: 100px;
  border-radius: 3px;
  margin: 15px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 25px;
  cursor: pointer;
  &:hover {
    border: solid 2px ${MAIN_COLOR};
    background-color: rgba(45, 45, 45, 0.8);
    margin: 14px;
  }
  transition: all 0.1s ease-in-out;
`;

export const StatValue = styled.div`
  position: relative;
  display: flex;
  font-size: 0.7em;
  font-weight: bold;
  color: ${MAIN_COLOR};
`;

export const StatLabel = styled.div`
  position: relative;
  display: flex;
  font-size: 0.4em;
  margin-top: 25px;
  font-weight: light;
  color: ${BORDER_COLOR};
  opacity: 0.7;
`;
