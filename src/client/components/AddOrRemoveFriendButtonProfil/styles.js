import styled from 'styled-components';
import {
  MAIN_COLOR,
  LIGHT_MAIN_COLOR,
  DARK_MAIN_COLOR,
  RED,
  DARK_RED,
} from '../../constants/colors';
import { FaTrash, FaPlus } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100%;
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    ${({ remove }) => (remove ? RED : MAIN_COLOR)} 0%,
    ${({ remove }) => (remove ? RED : DARK_MAIN_COLOR)} 100%
  );
  min-width: 120px;
  height: 40px;
  cursor: pointer;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 0.3em;
  box-sizing: border-box;
  &:hover {
    background-image: linear-gradient(
      to bottom,
      ${({ remove }) => (remove ? RED : MAIN_COLOR)} 100%,
      ${({ remove }) => (remove ? RED : DARK_MAIN_COLOR)} 100%
    );
  }
  transition: all 0.3s ease-in-out;
`;

export const AddIcon = styled(FaPlus)`
  position: relative;
  display: flex;
  height: 50%;
  margin-right: 5px;
`;

export const RemoveIcon = styled(FaTrash)`
  position: relative;
  display: flex;
  height: 50%;
  margin-right: 5px;
`;
