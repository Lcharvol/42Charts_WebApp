import React from 'react';
import { string } from 'prop-types';

import { Container, EmptyIcon } from './styles';

const proptypes = {
  searchValue: string.isRequired,
};

const EmptySearch = ({ searchValue }) => (
  <Container>
    <EmptyIcon />
    {`No result for "${searchValue}"`}
  </Container>
);

EmptySearch.propTypes = proptypes;

export default EmptySearch;
