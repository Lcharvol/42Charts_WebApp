import styled from 'styled-components';

import {
  BORDER_COLOR,
  LIGHT_GREY,
  DARK_TEXT_COLOR,
} from '../../constants/colors';
import ChevronDownIcon from '../../../../public/chev_down.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: rgb(250, 250, 250);
  border-radius: 3px;
  border: solid 1px ${BORDER_COLOR};
  cursor: pointer;
  &:hover {
    background-color: white;
  }
  z-index: 1000;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 30px;
  background-color: white;
  border: solid 1px ${BORDER_COLOR};
  top: ${({ height }) => height}px;
`;

export const SelectedValue = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  font-size: 0.25em;
  padding-left: 15px;
  color: ${DARK_TEXT_COLOR};
  user-select: none;
`;

export const ChevIcon = styled.div`
    position:relative;
    display:flex;
    width:15px;
    height:15px;
    margin:5px;
    background-image:url('${ChevronDownIcon}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity:0.7;
`;

export const Value = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.23em;
  color: ${DARK_TEXT_COLOR};
  user-select: none;
  width: calc(100% - 15px);
  height: 25px;
  padding-left: 15px;
  &:hover {
    background-color: ${LIGHT_GREY};
  }
`;
