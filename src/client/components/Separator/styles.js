import styled from 'styled-components';

import { BORDER_COLOR } from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: ${({ width }) => width};
  height: 1px;
  background-color: ${BORDER_COLOR};
  margin-left: auto;
  margin-right: auto;
`;
