import React from 'react';
import { object } from 'prop-types';
import { isNil } from 'ramda';

import { Container } from './styles';

const proptypes = {
  app: object.isRequired,
};

const AppElem = ({ app: { imageUrl, website } }) => (
  <Container
    imageUrl={isNil(imageUrl) ? null : `https://profile.intra.42.fr${imageUrl}`}
  />
);

AppElem.propTypes = proptypes;

export default AppElem;
