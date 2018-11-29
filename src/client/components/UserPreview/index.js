import React from 'react';
import { object, string, func, bool, number } from 'prop-types';
import { equals, isNil, find, propEq, map } from 'ramda';
import { withStateHandlers, mapProps } from 'recompose';

import {
  Container,
  LeftSide,
  RightSide,
  Login,
  Level,
  Rank,
  CampusLabel,
  LogTime,
  Badges,
} from './styles';
import { UserAvatar } from '../UserAvatar';
import {
  FIRST_RANK_COLOR,
  SECOND_RANK_COLOR,
  THIRD_RANK_COLOR,
  BORDER_COLOR,
  MAIN_COLOR,
  BACKGROUND_COLOR,
} from '../../constants/colors';
import { VIEW_STUDENT } from '../../constants/GaLabels';
import { coalitionsBackground } from '../../constants/coalitions';
import { badges } from '../../constants/badges';
import AddOrRemoveFriendButtom from '../AddOrRemoveFriendButton';
import { eventGa } from '../../googleAnalytics';
import Badge from '../Badge';

const propTypes = {
  user: object.isRequired,
  myLogin: string,
  addFriend: func,
  removeFriend: func,
  isMyFriend: bool,
  enhanceMe: func,
  winWidth: number,
};

const getLevelColor = level => {
  const r = Math.floor((level / 21) * 46);
  const g = Math.floor((level / 21) * 204);
  const b = Math.floor((level / 21) * 113);
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

const UserPreview = ({
  user,
  myLogin = '',
  isHover,
  handleChangeIsHover,
  removeFriend,
  addFriend,
  isMyFriend,
  enhanceMe,
  winWidth,
}) => {
  const userCoalition =
    find(propEq('id', user.coalitionID))(coalitionsBackground) || {};
  return (
    <Container
      onMouseEnter={() => handleChangeIsHover(true)}
      onMouseLeave={() => handleChangeIsHover(false)}
      to={`/user/${user.id}`}
      onClick={() => eventGa(VIEW_STUDENT)}
      color={
        myLogin.toLowerCase() === user.login.toLowerCase()
          ? MAIN_COLOR
          : 'rgba(30,30,30,0.7)'
      }
    >
      <LeftSide>
        <Rank color={getRankColor(user.rank)}>{user.rank}</Rank>
        <UserAvatar
          profilPicture={user.imageUrl}
          width={'60px'}
          height={'60px'}
          round
        />
        <Login>
          {user.login.charAt(0).toUpperCase() + user.login.slice(1)}
        </Login>
        <Badges>
          <Badge
            color={userCoalition.gradientColor}
            imageUrl={userCoalition.imageUrl}
            shape={'square'}
          />
          {!isNil(winWidth) &&
            winWidth > 1000 &&
            map(
              badge =>
                badge.requirement(user) && (
                  <Badge
                    key={badge.id}
                    color={badge.color}
                    imageUrl={badge.imageUrl}
                    logo={badge.logo}
                    hoverValue={badge.hoverValue}
                  />
                ),
              badges,
            )}
        </Badges>
      </LeftSide>
      <RightSide>
        {(!isNil(addFriend) || !isNil(removeFriend)) && (
          <AddOrRemoveFriendButtom
            user={user}
            usable={myLogin.toLowerCase() !== user.login.toLowerCase()}
            userId={user.id}
            addFriend={isMyFriend ? undefined : addFriend}
            removeFriend={isMyFriend ? removeFriend : undefined}
            opacity={isHover ? 1 : 0}
            enhanceMe={enhanceMe}
          />
        )}
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
      </RightSide>
    </Container>
  );
};

UserPreview.propTypes = propTypes;

export default withStateHandlers(
  ({ initialIsHover = false }) => ({
    isHover: initialIsHover,
  }),
  {
    handleChangeIsHover: () => newValue => ({
      isHover: newValue,
    }),
  },
)(UserPreview);
