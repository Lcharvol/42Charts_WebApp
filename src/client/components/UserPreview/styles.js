import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  DARK_TEXT_COLOR,
  MAIN_COLOR,
  FONT_COLOR,
} from '../../constants/colors';

export const Container = styled(Link)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 800px;
  height: 75px;
  margin-top: 5px;
  margin-bottom: 5px;
  max-width: 800px;
  padding-left: 5px;
  background-color: ${({ color }) => color};
  border-radius: 3px;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
    ${({ color }) =>
      color === 'none' && 'background-color: rgba(150,150, 150,0.1);'};
  }
  text-decoration: none;
  transition: all 0.1s ease-in-out;
`;

export const Rank = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  font-size: 0.4em;
  min-width: 60px;
  user-select: none;
`;

export const Login = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.3em;
  color: ${FONT_COLOR};
  opacity: 0.7;
  margin-left: 5px;
  min-width: 80px;
`;

export const Level = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  font-size: 0.4em;
  min-width: 80px;
  margin-left: 5px;
  user-select: none;
`;

export const CampusLabel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.3em;
  color: ${DARK_TEXT_COLOR};
  opacity: 0.7;
  margin-left: 5px;
  min-width: 90px;
  color: ${FONT_COLOR};
  user-select: none;
`;

export const LogTime = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ color }) => color};
  font-size: 0.4em;
  min-width: 110px;
  margin-left: 5px;
  user-select: none;
`;
