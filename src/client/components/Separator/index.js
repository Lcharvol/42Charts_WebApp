import React from 'react';

import { Container } from './styles';
import { BORDER_COLOR } from '../../constants/colors';

const Separator = ({ width = '100%', color = BORDER_COLOR }) => (
  <Container width={width} color={color} />
);

export default Separator;
