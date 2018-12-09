import React from 'react';
import { number, string } from 'prop-types';

import { Container, Content, Label } from './styles';

const proptypes = {
  value: number.isRequired,
  total: number.isRequired,
  label: string,
};

const ProgressBar = ({ value, total, label = '' }) => (
  <Container>
    <Content value={total > 1 ? Math.floor((value / total) * 100) : 0} />
    <Label>{`${value}/${total} ${label}`}</Label>
  </Container>
);

ProgressBar.propTypes = proptypes;

export default ProgressBar;
