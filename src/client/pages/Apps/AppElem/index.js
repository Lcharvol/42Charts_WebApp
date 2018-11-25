import React from 'react';
import { object, bool, func } from 'prop-types';
import { isNil } from 'ramda';
import { withStateHandlers } from 'recompose';

import {
  Container,
  Shadow,
  LikeButton,
  LikeIcon,
  PlusButton,
  PlusIcon,
} from './styles';

const proptypes = {
  app: object.isRequired,
  isHover: bool.isRequired,
  handleChangeIsHover: func.isRequired,
};

const AppElem = ({
  app: { imageUrl, website },
  isHover,
  handleChangeIsHover,
}) => (
  <Container
    imageUrl={isNil(imageUrl) ? null : `https://profile.intra.42.fr${imageUrl}`}
    onMouseEnter={() => handleChangeIsHover(true)}
    onMouseLeave={() => handleChangeIsHover(false)}
  >
    <Shadow opacity={isHover ? 1 : 0}>
      <LikeButton>
        <LikeIcon />
      </LikeButton>
      <PlusButton onClick={() => window.open(website, '_blank')}>
        <PlusIcon />
      </PlusButton>
    </Shadow>
  </Container>
);

AppElem.propTypes = proptypes;

export default withStateHandlers(
  ({ initialIsHover = false }) => ({
    isHover: initialIsHover,
  }),
  {
    handleChangeIsHover: () => newValue => ({
      isHover: newValue,
    }),
  },
)(AppElem);
