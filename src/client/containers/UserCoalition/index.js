import React from 'react';

import {
  Container,
  LeftSide,
  RightSide,
  Flag,
  Name,
  Score,
  Rank,
} from './styles';

const UserCoalition = ({
  coalition: { name, color, imageUrl, userScore, userRank },
}) => (
  <Container>
    <LeftSide>
      <Flag color={color} logo={imageUrl} />
    </LeftSide>
    <RightSide>
      <Name color={color}>{name}</Name>
      <Score>{userScore}</Score>
      <Rank>{userRank}</Rank>
    </RightSide>
  </Container>
);

export default UserCoalition;
