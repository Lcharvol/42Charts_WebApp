import styled from 'styled-components';
import { DARK_TEXT_COLOR, MAIN_COLOR } from '../../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 70px;
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;
`;

export const Label = styled.div`
    color: ${DARK_TEXT_COLOR};
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 0.3em;
    margin-left:15px;
    margin-right:15px;
    width: 50px
    cursor:pointer;
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
    ${({ isSelected }) => isSelected && 'color:white'}
    z-index:50;
`;

export const SelectedBox = styled.div`
  position: absolute;
  height: 30px;
  width: 60px;
  background-color: ${MAIN_COLOR};
  border-radius: 3px;
  z-index: 40;
  opacity: 0.8;
  left: ${({ leftPosition }) => leftPosition}px;
  transition: left 0.2s ease-in-out;
`;
