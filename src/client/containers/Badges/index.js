import React from 'react';
import { map, length, isNil, isEmpty } from 'ramda';
import {
  compose,
  withStateHandlers,
  lifecycle,
  fromRenderProps,
} from 'recompose';
import { withSize } from 'react-sizeme';

import {
  Container,
  ArrowContainer,
  LeftArrowIcon,
  RightArrowIcon,
  Content,
  BadgeContainer,
  BadgesLabel,
  BadgesValue,
} from './styles';
import { BADGE_CONTAINER_WIDTH, BADGE_CONTAINER_MARGIN } from './constans';
import { getMy42CursusLevel, getMyTotalLogTime } from '../../selectors/me';
import { store } from '../../index';

const badges = [
  {
    id: 0,
    label: 'Level',
    selector: state => getMy42CursusLevel(state),
  },
  {
    id: 1,
    label: 'Logtime',
    selector: state => getMyTotalLogTime(state),
  },
];

const Badges = ({ pos, handleChangePos, size: { width } }) => {
  const nbBadgeVisible = Math.floor((width - 2 * 60) / BADGE_CONTAINER_WIDTH);
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
        <Content pos={pos}>
          {map(
            badge => (
              <BadgeContainer
                isVisible={badge.id >= pos && badge.id < pos + nbBadgeVisible}
                key={badge.id}
              >
                <BadgesValue>{badge.selector(state)}</BadgesValue>
                <BadgesLabel>{badge.label}</BadgesLabel>
              </BadgeContainer>
            ),
            badges,
          )}
        </Content>
      )}
      <ArrowContainer
        pos={'right'}
        onClick={() =>
          handleChangePos(
            pos + 2 * nbBadgeVisible > length(badges)
              ? length(badges) - nbBadgeVisible
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
