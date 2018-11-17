import styled from 'styled-components';
import { BORDER_COLOR, MAIN_COLOR } from '../../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(15, 15, 15, 0.7);
  border-radius: 3px;
  min-height: 120px;
  min-width: 200px;
  max-height: 120px;
  max-width: 200px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 5px;
  padding: 15px;
`;

export const FullName = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  font-family: sans-serif;
  font-weight: bold;
  align-items: flex-end;
  font-size: 0.4em;
  color: white;
  margin-bottom: 5px;
  user-select: none;
`;

export const Content = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
`;

export const Label = styled.div`
  position: relative;
  color: ${MAIN_COLOR};
  font-size: 0.3em;
  margin-right: 10px;
  user-select: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 0;
`;

export const Value = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${BORDER_COLOR};
  font-family: sans-serif;
  font-weight: 70;
  font-size: 0.3em;
  width: 100%;
  user-select: none;
`;
