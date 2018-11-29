import React from 'react';
import { equals, find, propEq } from 'ramda';

import {
  Container,
  LeftSide,
  RightSide,
  Flag,
  CoalitionIcon,
  Name,
  Score,
  ScoreIcon,
  Rank,
  RankIcon,
} from './styles';
import {
  FIRST_RANK_COLOR,
  SECOND_RANK_COLOR,
  THIRD_RANK_COLOR,
} from '../../constants/colors';
import { coalitionsBackground } from '../../constants/coalitions';

const getColorFromRank = rank => {
  if (equals(rank, 1)) return FIRST_RANK_COLOR;
  if (equals(rank, 2)) return SECOND_RANK_COLOR;
  if (equals(rank, 3)) return THIRD_RANK_COLOR;
  return undefined;
};

const UserCoalition = ({
  coalition: { id, name, color, imageUrl, userScore, userRank },
}) => {
  const coalitionElem = find(propEq('id', id))(coalitionsBackground) || {};
  return (
    <Container>
      <LeftSide>
        <Flag gradientColor={coalitionElem.gradientColor} logo={imageUrl}>
          <CoalitionIcon icon={imageUrl} />
        </Flag>
      </LeftSide>
      <RightSide>
        <Name color={color}>{name}</Name>
        <Score>
          <ScoreIcon />
          {userScore}
        </Score>
        <Rank>
          <RankIcon color={getColorFromRank(parseInt(userRank))} />
          {userRank}
        </Rank>
      </RightSide>
    </Container>
  );
};

export default UserCoalition;
