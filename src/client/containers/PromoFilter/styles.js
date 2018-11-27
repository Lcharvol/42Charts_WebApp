import styled from 'styled-components';
import {
  DARK_FONT_COLOR,
  MAIN_COLOR,
  FONT_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 70px;
  flex-drap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

export const LeftSide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
`;

export const RightSide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
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
  top: 10px;
  left: ${({ leftPosition }) => leftPosition}px;
  transition: left 0.2s ease-in-out;
`;

export const SortLabel = styled.div`
  position: relative;
  display: flex;
  font-size: 0.3em;
  color: ${DARK_FONT_COLOR};
  margin-right: 15px;
  min-width: 60px;
  margin-left: 15px;
`;
