import React from 'react';
import { array, number } from 'prop-types';
import { length } from 'ramda';
import { onlyUpdateForKeys } from 'recompose';

import { Container, TopSide, BottomSide, Bar, Label } from './styles';
import Separator from '../../../components/Separator';
import { MAIN_COLOR } from '../../../constants/colors';

const proptypes = {
  usersByUnit: array,
  nbUsers: number.isRequired,
};

const Graph = ({ usersByUnit = [], nbUsers }) => (
  <Container>
    {console.log('Graph Render')}
    <TopSide>
      {usersByUnit.map((UsersPerUnit, id) => (
        <Bar
          key={id}
          value={UsersPerUnit / nbUsers}
          valuesLength={length(usersByUnit)}
        />
      ))}
    </TopSide>
    <Separator color={MAIN_COLOR} />
    <BottomSide>
      {usersByUnit.map((user, id) => (
        <Label key={id} />
      ))}
    </BottomSide>
  </Container>
);

Graph.propTypes = proptypes;

export default onlyUpdateForKeys(['usersByUnit'])(Graph);
