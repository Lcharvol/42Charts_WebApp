import styled from 'styled-components';
import {
  LIGHT_BACKGROUND_COLOR,
  BACKGROUND_COLOR,
  MAIN_COLOR,
} from '../../constants/colors';
import { FaPlus } from 'react-icons/fa';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  flex: 1;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.2s ease-in-out;
  ${({ opacity }) => opacity === 1 && 'transition-delay: 0.4s;'};
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 3px;
  background-color: ${({ isHover }) =>
    isHover ? MAIN_COLOR : LIGHT_BACKGROUND_COLOR};
`;

export const Icon = styled(FaPlus)`
  position: relative;
  display: flex;
  width: 70%;
  height: 70%;
  color: ${BACKGROUND_COLOR};
`;

export const Label = styled.div`
  position: relative;
  display: flex;
  font-size: 0.3em;
  color: ${MAIN_COLOR};
  margin-left: 10px;
`;
