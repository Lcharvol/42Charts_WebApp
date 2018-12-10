import styled from 'styled-components';
import { DARK_FONT_COLOR } from '../../../constants/colors';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  flex: 1;
  min-height: 30px;
  box-sizing: border-box;
`;

export const Label = styled.div`
  position: relative;
  display: flex;
  color: ${DARK_FONT_COLOR};
  font-size: 0.3em;
`;

export const StatusElem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
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
