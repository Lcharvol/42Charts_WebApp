import React from 'react';
import { map, length, isNil, isEmpty, find, propEq } from 'ramda';
import { compose, withStateHandlers } from 'recompose';
import { withSize } from 'react-sizeme';

import {
  Container,
  ArrowContainer,
  LeftArrowIcon,
  RightArrowIcon,
  Content,
  MovingContent,
  BadgeContainer,
  BadgesLabel,
  BadgesValue,
  BadgeIcon,
} from './styles';
import { BADGE_CONTAINER_WIDTH, BADGE_CONTAINER_MARGIN } from './constans';
import {
  getMy42CursusLevel,
  getMyTotalLogTime,
  getMyCoalitionScore,
} from '../../selectors/me';
import {
  getUser42CursusLevel,
  getUserTotalLogTime,
  getUserCoalitionScore,
} from '../../selectors/user';
import { store } from '../../index';
import {
  getBadgeIconFromLevel,
  getBadgeIconFromLogTime,
  getBadgeIconFromCoalitionScore,
} from './utils';

const myBadges = [
  {
    id: 0,
    label: 'Level',
    selector: state => getMy42CursusLevel(state),
    getBadgeIcon: state => {
      const cursus = find(propEq('name', '42'))(state.me.cursus);
      return isNil(cursus) ? '' : getBadgeIconFromLevel(cursus.level);
    },
  },
  {
    id: 1,
    label: 'Logtime',
    selector: state => getMyTotalLogTime(state),
    getBadgeIcon: state => {
      const myLogs = state.me.logs;
      return isEmpty(myLogs)
        ? ''
        : getBadgeIconFromLogTime(myLogs.totalLogTime);
    },
  },
  {
    id: 2,
    label: 'Coalition score',
    selector: state => getMyCoalitionScore(state),
    getBadgeIcon: state => {
      const myCoalition = state.me.coalition;
      return isEmpty(myCoalition)
        ? ''
        : getBadgeIconFromCoalitionScore(myCoalition.userScore);
    },
  },
];

const userBadges = [
  {
    id: 0,
    label: 'Level',
    selector: state => getUser42CursusLevel(state),
    getBadgeIcon: state => {
      const cursus = find(propEq('name', '42'))(state.user.cursus);
      return isNil(cursus) ? '' : getBadgeIconFromLevel(cursus.level);
    },
  },
  {
    id: 1,
    label: 'Logtime',
    selector: state => getUserTotalLogTime(state),
    getBadgeIcon: state => {
      const logs = state.user.logs;
      return isEmpty(logs) ? '' : getBadgeIconFromLogTime(logs.totalLogTime);
    },
  },
  {
    id: 2,
    label: 'Coalition score',
    selector: state => getUserCoalitionScore(state),
    getBadgeIcon: state => {
      const coalition = state.user.coalition;
      return isEmpty(coalition)
        ? ''
        : getBadgeIconFromCoalitionScore(coalition.userScore);
    },
  },
];

const Badges = ({ isMe, pos, handleChangePos, size: { width } }) => {
  const canBeVisible = Math.floor((width - 2 * 60) / BADGE_CONTAINER_WIDTH);
  const nbBadgeVisible =
    canBeVisible > length(isMe ? myBadges : userBadges)
      ? length(isMe ? myBadges : userBadges)
      : canBeVisible;
  const state = !isNil(store) ? store.getState() : {};
  return (
    <Container>
      <ArrowContainer
        pos={'left'}
        onClick={() =>
          handleChangePos(pos - nbBadgeVisible < 0 ? 0 : pos - nbBadgeVisible)
        }
      >
        <LeftArrowIcon />
      </ArrowContainer>
      {!isEmpty(state) && (
        <Content nbBadgeVisible={nbBadgeVisible}>
          <MovingContent pos={pos}>
            {map(
              badge => (
                <BadgeContainer
                  isVisible={badge.id >= pos && badge.id < pos + nbBadgeVisible}
                  key={badge.id}
                >
                  <BadgeIcon icon={badge.getBadgeIcon(state)} />
                  <BadgesValue>{badge.selector(state)}</BadgesValue>
                  <BadgesLabel>{badge.label}</BadgesLabel>
                </BadgeContainer>
              ),
              isMe ? myBadges : userBadges,
            )}
          </MovingContent>
        </Content>
      )}
      <ArrowContainer
        pos={'right'}
        onClick={() =>
          handleChangePos(
            pos + 2 * nbBadgeVisible > length(isMe ? myBadges : userBadges)
              ? length(isMe ? myBadges : userBadges) - nbBadgeVisible
              : pos + nbBadgeVisible,
          )
        }
      >
        <RightArrowIcon />
      </ArrowContainer>
    </Container>
  );
};

export default compose(
  withStateHandlers(
    ({ initialPos = 0, initialBoxWidth = 0 }) => ({
      pos: initialPos,
    }),
    {
      handleChangePos: () => newPos => ({
        pos: newPos,
      }),
    },
  ),
  withSize(),
)(Badges);
