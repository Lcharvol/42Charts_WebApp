import styled from 'styled-components';
import {
  MAIN_COLOR,
  DARK_MAIN_COLOR,
  RED,
  LIGHT_BACKGROUND_COLOR,
  HEADER_BACKGROUND_COLOR,
  DARK_FONT_COLOR,
} from '../../constants/colors';
import { FaTrash, FaPlus } from 'react-icons/fa';
import { RESPONSIVITY_WIDTH } from '../../containers/ProfilHeader/constants';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100%;
  @media (max-width: ${RESPONSIVITY_WIDTH}px) {
    margin-top: 10px;
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    ${({ remove }) => (remove ? LIGHT_BACKGROUND_COLOR : MAIN_COLOR)} 0%,
    ${({ remove }) => (remove ? HEADER_BACKGROUND_COLOR : DARK_MAIN_COLOR)} 100%
  );
  min-width: 120px;
  height: 36px;
  cursor: pointer;
  border-radius: 3px;
  padding: 3px 10px;
  font-size: 0.3em;
  box-sizing: border-box;
  &:hover {
    background-image: linear-gradient(
      to bottom,
      ${({ remove }) => (remove ? LIGHT_BACKGROUND_COLOR : MAIN_COLOR)} 100%,
      ${({ remove }) => (remove ? HEADER_BACKGROUND_COLOR : DARK_MAIN_COLOR)}
        100%
    );
  }
  color: ${({ remove }) => (remove ? RED : 'rgba(0,0,0,0.6)')};
  transition: all 0.3s ease-in-out;
`;

export const AddIcon = styled(FaPlus)`
  position: relative;
  display: flex;
  height: 50%;
  margin-right: 10px;
`;

export const RemoveIcon = styled(FaTrash)`
  position: relative;
  display: flex;
  height: 50%;
  margin-right: 10px;
`;
