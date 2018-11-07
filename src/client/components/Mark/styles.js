import styled from 'styled-components';
import { BORDER_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  min-height: 30px;
  border-bottom: solid 1px ${BORDER_COLOR};
`;
