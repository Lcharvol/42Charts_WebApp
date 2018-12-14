import React from 'react';
import { map, length } from 'ramda';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { withSize } from 'react-sizeme';

import {
  Container,
  ArrowContainer,
  LeftArrowIcon,
  RightArrowIcon,
  Content,
  BadgeContainer,
} from './styles';
import { BADGE_CONTAINER_WIDTH, BADGE_CONTAINER_MARGIN } from './constans';

const badges = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

const Badges = ({ pos, handleChangePos, size: { width } }) => {
  const nbBadgeVisible = Math.floor(
    (width - 2 * BADGE_CONTAINER_MARGIN) / BADGE_CONTAINER_WIDTH,
  );
  return (
    <Container>
      <ArrowContainer
        pos={'left'}
        onClick={() => handleChangePos(pos - 1 < 0 ? 0 : pos - 1)}
      >
        <LeftArrowIcon />
      </ArrowContainer>
      <Content pos={pos}>
        {map(
          badge => (
            <BadgeContainer
              isVisible={badge.id >= pos && badge.id < pos + nbBadgeVisible}
              key={badge.id}
            />
          ),
          badges,
        )}
      </Content>
      <ArrowContainer
        pos={'right'}
        onClick={() =>
          handleChangePos(
            pos + 1 + nbBadgeVisible > length(badges) + 1 ? pos : pos + 1,
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
