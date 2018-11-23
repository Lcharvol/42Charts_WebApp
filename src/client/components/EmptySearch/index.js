import React from 'react';
import { string } from 'prop-types';
import { isNil } from 'ramda';

import { Container, EmptyIcon } from './styles';
import { ALL_PROMO_SELECTED } from '../../pages/Students/constants';

const proptypes = {
  searchValue: string.isRequired,
};

const EmptySearch = ({ searchValue, selectedPromo }) => (
  <Container>
    <EmptyIcon />
    {selectedPromo !== ALL_PROMO_SELECTED && !isNil(selectedPromo)
      ? `No result for "${searchValue}" in ${selectedPromo}`
      : `No result for "${searchValue}"`}
  </Container>
);

EmptySearch.propTypes = proptypes;

export default EmptySearch;
