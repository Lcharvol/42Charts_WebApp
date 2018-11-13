import React from 'react';
import { array } from 'prop-types';
import { map } from 'ramda';

import { Container, TopSide, BottomSide, Bar, Label } from './styles';
import Separator from '../../components/Separator';

const proptypes = {
  usersByLevel: array,
};

const UsersByLevel = ({ usersByLevel = [] }) => (
  <Container>
    <TopSide>
      {map(
        level => (
          <Bar />
        ),
        usersByLevel,
      )}
    </TopSide>
    <Separator />
    <BottomSide>
      {map(
        level => (
          <Label />
        ),
        usersByLevel,
      )}
    </BottomSide>
  </Container>
);

UsersByLevel.propTypes = proptypes;

export default UsersByLevel;
