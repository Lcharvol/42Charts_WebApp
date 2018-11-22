import styled from 'styled-components';

import { MdRowing } from 'react-icons/md';
import { MAIN_COLOR } from '../../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-top: 75px;
  width: 80%;
  min-width: 425px;
  min-height: 200px;
  color: ${MAIN_COLOR};
  font-size: 0.4em;
`;

export const EmptyIcon = styled(MdRowing)`
  position: relative;
  color: ${MAIN_COLOR};
  font-size: 1em;
  width: 100px;
  height: 100px;
`;
