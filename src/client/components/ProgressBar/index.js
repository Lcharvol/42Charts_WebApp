import React from 'react';
import { number } from 'prop-types';

import { Container, Content } from './styles';

const proptypes = {
  value: number.isRequired,
  total: number.isRequired,
};

const ProgressBar = ({ value, total }) => (
  <Container>
    <Content value={total > 1 ? Math.floor((value / total) * 100) : 0} />
  </Container>
);

ProgressBar.propTypes = proptypes;

export default ProgressBar;
