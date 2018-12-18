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
import { BADGE_CONTAINER_WIDTH } from './constans';
import { store } from '../../index';
import { myBadges, userBadges } from '../../constants/badges';

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
