import React from 'react';
import { object } from 'prop-types';
import { equals } from 'ramda';

import { Container, Login, Level, Rank, CampusLabel } from './styles';
import { UserAvatar } from '../UserAvatar';
import {
  FIRST_RANK_COLOR,
  SECOND_RANK_COLOR,
  THIRD_RANK_COLOR,
  BORDER_COLOR,
} from '../../constants/colors';

const propTypes = {
  user: object.isRequired,
};

const getRankColor = rank => {
  if (equals(rank, 1)) return FIRST_RANK_COLOR;
  if (equals(rank, 2)) return SECOND_RANK_COLOR;
  if (equals(rank, 3)) return THIRD_RANK_COLOR;
  return BORDER_COLOR;
};

const UserPreview = ({ user, rank }) => (
  <Container>
    <Rank color={getRankColor(rank)}>{rank}</Rank>
    <UserAvatar profilPicture={user.imageUrl} width={'60px'} height={'60px'} />
    <Login>{user.login}</Login>
    <Level>{user.cursusLevel}</Level>
    <CampusLabel>{user.campusName}</CampusLabel>
  </Container>
);

UserPreview.propTypes = propTypes;

export default UserPreview;
