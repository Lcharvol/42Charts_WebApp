import React from 'react';
import { object, string } from 'prop-types';
import { equals } from 'ramda';
import {
  compose,
  withStateHandlers,
  lifecycle,
  onlyUpdateForKeys,
} from 'recompose';

import { Container, Login, Level, Rank, CampusLabel, LogTime } from './styles';
import { UserAvatar } from '../UserAvatar';
import {
  FIRST_RANK_COLOR,
  SECOND_RANK_COLOR,
  THIRD_RANK_COLOR,
  BORDER_COLOR,
  MAIN_COLOR,
  BACKGROUND_COLOR,
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

const getLogtTime = logTimInSecond => {
  const days = Math.floor(logTimInSecond / 86400);
  const hours = Math.floor((logTimInSecond - days * 86400) / 3600);
  return `${days} D ${hours} H`;
};

const UserPreview = ({ user, myLogin = '' }) => (
  <Container
    to={`/user?${user.id}`}
    color={
      myLogin.toLowerCase() === user.login.toLowerCase() ? MAIN_COLOR : 'none'
    }
  >
    <UserAvatar
      profilPicture={user.imageUrl}
      width={'60px'}
      height={'60px'}
      round
    />
    <Rank color={getRankColor(user.rank)}>{user.rank}</Rank>
    <Login>{user.login}</Login>
    <Level
      color={
        myLogin.toLowerCase() === user.login.toLowerCase()
          ? BACKGROUND_COLOR
          : getLevelColor(user.cursusLevel)
      }
    >
      {user.cursusLevel.toFixed(2)}
    </Level>
    <CampusLabel>{user.campusName}</CampusLabel>
    <LogTime
      color={
        myLogin.toLowerCase() === user.login.toLowerCase()
          ? BACKGROUND_COLOR
          : MAIN_COLOR
      }
    >
      {getLogtTime(user.totalLogTime)}
    </LogTime>
  </Container>
);

UserPreview.propTypes = propTypes;

export default UserPreview;
