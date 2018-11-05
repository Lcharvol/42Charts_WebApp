import styled from 'styled-components';
import { DARK_TEXT_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 100%;
  height: 75px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 5px;
`;

export const Login = styled.div`
  font-size: 0.3em;
  color: ${DARK_TEXT_COLOR};
  opacity: 0.7;
  margin-left: 25px;
`;
