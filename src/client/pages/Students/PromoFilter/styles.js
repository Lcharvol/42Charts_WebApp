import styled from 'styled-components';
import {
  DARK_FONT_COLOR,
  MAIN_COLOR,
  FONT_COLOR,
} from '../../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 70px;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;
`;

export const Label = styled.div`
    color: ${FONT_COLOR};
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 0.3em;
    margin-left:15px;
    margin-right:15px;
    width: 50px
    cursor:pointer;
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0.3)};
    ${({ isSelected }) => isSelected && 'color:white'}
    z-index:50;
    user-select:none;
    &:hover {
      opacity: 0.8;
    }
`;

export const SelectedBox = styled.div`
  position: absolute;
  height: 30px;
  width: 65px;
  background-color: ${MAIN_COLOR};
  border-radius: 3px;
  z-index: 40;
  opacity: 0.8;
  left: ${({ leftPosition }) => leftPosition}px;
  transition: left 0.2s ease-in-out;
`;

export const FilterLabel = styled.div`
  position: relative;
  display: flex;
  font-size: 0.3em;
  color: ${DARK_FONT_COLOR};
  margin-right: 15px;
  margin-left: 25px;
  min-width: 60px;
`;
