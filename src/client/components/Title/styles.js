import styled from 'styled-components';
import { MAIN_COLOR, DARK_MAIN_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  margin-bottom: 15px;
  font-weight: light;
  user-select: none;
  background: linear-gradient(
    to bottom,
    ${MAIN_COLOR} 0%,
    ${DARK_MAIN_COLOR} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
`;
