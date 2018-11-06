import React from 'react';
import { object, string } from 'prop-types';
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
  myLogin: string,
};

const getLevelColor = level => {
  const r = (level / 21) * 46;
  const g = (level / 21) * 204;
  const b = (level / 21) * 113;
  return `rgb(${r < 50 ? 50 : r},${g < 50 ? 50 : g},${b < 50 ? 50 : b})`;
};

const getRankColor = rank => {
  if (equals(rank, 1)) return FIRST_RANK_COLOR;
  if (equals(rank, 2)) return SECOND_RANK_COLOR;
  if (equals(rank, 3)) return THIRD_RANK_COLOR;
  return BORDER_COLOR;
};

const UserPreview = ({ user, rank, myLogin = '' }) => (
  <Container
    color={
      myLogin.toLowerCase() === user.login.toLowerCase()
        ? 'rgba(46,204,113, 0.1)'
        : 'none'
    }
  >
    <Rank color={getRankColor(rank)}>{rank}</Rank>
    <UserAvatar profilPicture={user.imageUrl} width={'60px'} height={'60px'} />
    <Login>{user.login}</Login>
    <Level color={getLevelColor(user.cursusLevel)}>
      {user.cursusLevel.toFixed(2)}
    </Level>
    <CampusLabel>{user.campusName}</CampusLabel>
  </Container>
);

UserPreview.propTypes = propTypes;

export default UserPreview;
