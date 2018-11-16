import styled from 'styled-components';

import {
  LIGHT_BACKGROUND_COLOR,
  DARK_BORDER_COLOR,
  DARK_FONT_COLOR,
  BORDER_COLOR,
} from '../../constants/colors';

export const Container = styled.input`
  position: relative;
  display: flex;
  min-width: 150px;
  height: 25px;
  background-color: ${LIGHT_BACKGROUND_COLOR};
  border-radius: 3px;
  border: solid 1px ${DARK_BORDER_COLOR};
  margin-left: 25px;
  color: ${DARK_FONT_COLOR};
  padding-left: 10px;
  padding-right: 10px;
  &:focus {
    outline: none;
    border: solid 1px ${BORDER_COLOR};
  }
`;
