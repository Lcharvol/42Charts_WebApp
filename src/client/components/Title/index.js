import React from 'react';
import { string } from 'prop-types';

import { Container, Content } from './styles';

const proptypes = {
  value: string.isRequired,
};

const Title = ({ value }) => (
  <Container>
    <Content>{value}</Content>
  </Container>
);

Title.propTypes = proptypes;

export default Title;
