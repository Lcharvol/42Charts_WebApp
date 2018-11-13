import React from 'react';
import { array, number } from 'prop-types';
import { map, fromPairs, length, times } from 'ramda';

import { Container, TopSide, BottomSide, Bar, Label } from './styles';
import Separator from '../../components/Separator';

const proptypes = {
  usersByLevels: array,
  totalUsers: number.isRequired,
};

const UsersByLevel = ({ usersByLevels = {}, totalUsers }) => (
  <Container>
    <TopSide>
      {usersByLevels.map((nbUsers, id) => (
        <Bar
          key={id}
          value={nbUsers / totalUsers}
          valuesLength={length(usersByLevels)}
        />
      ))}
    </TopSide>
    <Separator />
    <BottomSide>
      {usersByLevels.map((user, id) => (
        <Label key={id} />
      ))}
    </BottomSide>
  </Container>
);

UsersByLevel.propTypes = proptypes;

export default UsersByLevel;
