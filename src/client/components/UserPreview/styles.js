import styled from 'styled-components';
import {
  DARK_TEXT_COLOR,
  MAIN_COLOR,
  FONT_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 100%;
  height: 75px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 5px;
  background-color: ${({ color }) => color};
  border-radius: 3px;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.3s ease-in-out;
`;

export const Login = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.3em;
  color: ${FONT_COLOR};
  opacity: 0.7;
  margin-left: 25px;
  width: 100px;
`;

export const Level = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  font-size: 0.4em;
  width: 100px;
`;

export const Rank = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  font-size: 0.4em;
  width: 50px;
`;

export const CampusLabel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.3em;
  color: ${DARK_TEXT_COLOR};
  opacity: 0.7;
  margin-left: 25px;
  width: 100px;
  color: ${FONT_COLOR};
`;
