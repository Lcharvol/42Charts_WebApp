import styled from 'styled-components';
import { DARK_FONT_COLOR } from '../../../constants/colors';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  min-height: 30px;
  box-sizing: border-box;
`;

export const Label = styled.div`
  position: relative;
  display: flex;
  color: ${DARK_FONT_COLOR};
  font-size: 0.3em;
  margin-right: 10px;
`;

export const StatusElem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  margin-left: 2px;
  margin-right: 2px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  transition: all 0.2s ease-in-out;
`;

export const UnCheckedIcon = styled(MdRadioButtonUnchecked)`
  position: relative;
  display: flex;
  font-size: 0.4em;
`;

export const CheckedIcon = styled(MdRadioButtonChecked)`
  position: relative;
  display: flex;
  font-size: 0.4em;
`;
