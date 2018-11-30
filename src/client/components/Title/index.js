import React from 'react';
import { string } from 'prop-types';

import { Container } from './styles';

const proptypes = {
  value: string.isRequired,
};

const Title = ({ value }) => <Container>{value}</Container>;

Title.propTypes = proptypes;

export default Title;
