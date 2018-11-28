import React from 'react';
import { isNil } from 'ramda';
import { string, number } from 'prop-types';

import { Container, Icon, LogoContainer } from './styles';

const proptypes = {
  color: string,
  imageUrl: string,
  size: number,
  shape: string,
};

const Badge = ({ color, imageUrl, shape = 'round', size = 25, logo }) => (
  <Container color={color} size={size} shape={shape}>
    {!isNil(imageUrl) && <Icon imageUrl={imageUrl} />}
    {!isNil(logo) && <LogoContainer>{logo}</LogoContainer>}
  </Container>
);

Badge.propTypes = proptypes;

export default Badge;
