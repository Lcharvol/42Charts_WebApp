import styled from 'styled-components';
import { MAIN_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  background-color: ${MAIN_COLOR};
  color: white;
  border-radius: 3px;
  font-size: 0.5em;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  transition: all 0.2s ease-in-out;
`;
