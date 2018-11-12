import styled from 'styled-components';
import { BORDER_COLOR, MAIN_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StatContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: solid 1px ${BORDER_COLOR};
  width: 175px;
  height: 100px;
  border-radius: 3px;
  margin: 15px;
  padding: 25px;
  cursor: pointer;
  &:hover {
    border: solid 2px ${MAIN_COLOR};
    margin: 14px;
  }
  transition: all 0.1s ease-in-out;
`;

export const StatLabel = styled.div`
  position: relative;
  display: flex;
  font-size: 0.7em;
  font-weight: bold;
`;

export const StatValue = styled.div`
  position: relative;
  display: flex;
  font-size: 0.4em;
  margin-top: 25px;
  font-weight: light;
  color: ${BORDER_COLOR};
`;
