import styled from 'styled-components';
import { BACKGROUND_COLOR } from '../../constants/colors';

export const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  color: rgb(35, 35, 35);
  font-weight: 0;
  font-size: 3em;
  overflow-x: hidden;
  background-color: ${BACKGROUND_COLOR};
  -webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;
