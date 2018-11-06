import React from 'react';
import { string, func } from 'prop-types';

import { Container } from './styles';

const proptypes = {
  label: string,
  action: func,
  width: string,
  height: string,
};

const Button = ({
  label = '',
  action = () => {},
  width = '175px',
  height = '50px',
}) => (
  <Container width={width} height={height} onClick={action}>
    {label}
  </Container>
);

Button.proptypes = proptypes;

export default Button;
