import React from 'react';

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

const UserCoalition = ({
  coalition: { name, color, imageUrl, userScore, userRank },
}) => (
  <Container>
    <LeftSide>
      <Flag color={color} logo={imageUrl}>
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
        <RankIcon />
        {userRank}
      </Rank>
    </RightSide>
  </Container>
);

export default UserCoalition;
