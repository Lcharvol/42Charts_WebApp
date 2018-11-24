import styled from 'styled-components';
import {
  LIGHT_BACKGROUND_COLOR,
  BACKGROUND_COLOR,
  MAIN_COLOR,
  RED,
} from '../../constants/colors';
import { FaTrash } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  min-width: 150px;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.2s ease-in-out;
  ${({ opacity }) => opacity === 1 && 'transition-delay: 0.4s;'};
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  transition: all 0.2s ease-in-out;
  border: solid 1.5px;
  border-color: ${({ isHover, remove }) => {
    if (remove) return isHover ? RED : LIGHT_BACKGROUND_COLOR;
    return isHover ? MAIN_COLOR : LIGHT_BACKGROUND_COLOR;
  }};
  color: ${({ isHover, remove }) => {
    if (remove) return isHover ? RED : LIGHT_BACKGROUND_COLOR;
    return isHover ? MAIN_COLOR : LIGHT_BACKGROUND_COLOR;
  }};
  transition: all 0.2s ease-in-out;
`;

export const AddIcon = styled(MdPerson)`
  position: relative;
  display: flex;
  width: 70%;
  height: 70%;
`;

export const RemoveIcon = styled(FaTrash)`
  position: relative;
  display: flex;
  width: 50%;
  height: 50%;
`;

export const Label = styled.div`
  position: relative;
  display: flex;
  font-size: 0.3em;
  color: ${({ remove }) => (remove ? RED : MAIN_COLOR)};
  margin-left: 15px;
  opacity: ${({ opacity }) => opacity};
  transition: all 0.2s ease-in-out;
`;
