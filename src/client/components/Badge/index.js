import React from 'react';
import { string, number } from 'prop-types';

import { Container, Icon } from './styles';

const proptypes = {
  color: string,
  imageUrl: string,
  size: number,
  shape: string,
};

const Badge = ({ color, imageUrl, shape = 'round', size = 25 }) => (
  <Container color={color} size={size} shape={shape}>
    <Icon imageUrl={imageUrl} />
  </Container>
);

Badge.propTypes = proptypes;

export default Badge;
