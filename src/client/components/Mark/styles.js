import styled from 'styled-components';
import { BORDER_COLOR, DARK_TEXT_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  min-height: 35px;
  border-bottom: solid 1px ${BORDER_COLOR};
`;

export const Name = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${DARK_TEXT_COLOR};
  opacity: 0.9;
  font-size: 0.3em;
`;

export const FinalMark = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  color: ${({ color }) => color};
  font-size: 0.3em;
  padding-right: 5px;
`;
