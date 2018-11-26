import React from 'react';
import { object, bool, func } from 'prop-types';
import { isNil } from 'ramda';
import { withStateHandlers } from 'recompose';
import { reqLikeApp, reqRemoveLikeApp } from '../../../requests';

import {
  Container,
  Shadow,
  LikeButton,
  LikeIcon,
  PlusButton,
  PlusIcon,
  NoPhotoIcon,
  NbLikes,
} from './styles';

const proptypes = {
  app: object.isRequired,
  isHover: bool.isRequired,
  handleChangeIsHover: func.isRequired,
};

const AppElem = ({
  app: { id, imageUrl, website, nbLikes, liked },
  isHover,
  handleChangeIsHover,
  likeApp,
  unlikeApp,
}) => (
  <Container
    imageUrl={isNil(imageUrl) ? null : `https://profile.intra.42.fr${imageUrl}`}
    onMouseEnter={() => handleChangeIsHover(true)}
    onMouseLeave={() => handleChangeIsHover(false)}
  >
    {isNil(imageUrl) && <NoPhotoIcon />}
    <Shadow opacity={isHover ? 1 : 0}>
      <LikeButton liked={!isNil(liked) || liked}>
        <LikeIcon
          onClick={() => {
            if (isNil(liked) || !liked) {
              reqLikeApp(id);
              likeApp(id);
            } else {
              unlikeApp(id);
              reqRemoveLikeApp(id);
            }
          }}
        />
        <NbLikes>{nbLikes}</NbLikes>
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
