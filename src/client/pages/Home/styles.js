import styled from 'styled-components';

import { BACKGROUND_COLOR } from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  background-color: ${BACKGROUND_COLOR};
  font-family: 'Roboto', sans-serif;
  color: rgb(35, 35, 35);
  font-weight: 0;
  font-size: 3em;
`;
