import styled from 'styled-components';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';

import { MAIN_COLOR, RED, DARK_FONT_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
`;

export const ValidatedIcon = styled(MdRadioButtonChecked)`
  color: ${MAIN_COLOR};
  font-size: 1em;
`;

export const FailedIcon = styled(MdRadioButtonChecked)`
  color: ${RED};
  font-size: 1em;
`;

export const NoStatusIcon = styled(MdRadioButtonUnchecked)`
  color: ${DARK_FONT_COLOR};
  font-size: 1em;
`;
