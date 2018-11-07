import styled from 'styled-components';
import { BORDER_COLOR } from '../../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgb(15, 15, 15);
  border-radius: 3px;
  height: 150px;
  width: 230px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 5px;
`;

export const FullName = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 10px;
  font-size: 0.4em;
  color: ${BORDER_COLOR};
`;

export const Content = styled.div`
  display: flex;
`;
