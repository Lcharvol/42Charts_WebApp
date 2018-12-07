import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  DARK_TEXT_COLOR,
  FONT_COLOR,
  DARK_BORDER_COLOR,
} from '../../constants/colors';

export const Container = styled(Link)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 75px;
  max-height: 75px;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-left: 5px;
  background-color: ${({ color }) => color};
  border-radius: 3px;
  opacity: 0.9;
  cursor: pointer;
  &:hover {
    opacity: 1;
    background-color: rgba(50, 50, 50, 0.2);
  }
  text-decoration: none;
  transition: all 0.1s ease-in-out;
  min-width: 680px;
`;

export const LeftSide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 10px;
`;

export const RightSide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 25px;
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
  margin-left: 20px;
  min-width: 80px;
`;

export const Badges = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  min-width: 50px;
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
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  font-size: 0.4em;
  min-width: 110px;
  margin-left: 5px;
  user-select: none;
`;
