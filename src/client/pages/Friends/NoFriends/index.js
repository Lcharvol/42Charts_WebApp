import React from 'react';
import { string } from 'prop-types';

import { Container, EmptyIcon } from './styles';
import { ALL_PROMO_SELECTED } from '../../Students/constants';

const proptypes = {
  selectedPromo: string.isRequired,
};

const NoFriends = ({ selectedPromo }) => (
  <Container>
    <EmptyIcon />
    {selectedPromo !== ALL_PROMO_SELECTED
      ? `No friends in ${selectedPromo} promo`
      : 'No Friends'}
  </Container>
);

NoFriends.propTypes = proptypes;

export default NoFriends;
