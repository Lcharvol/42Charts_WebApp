import React from 'react';

import { Container, TopSide, BottomSide } from './styles';
import UsersByLevel from '../../containers/UsersByLevel';

const Users = () => (
  <Container>
    <TopSide>
      <UsersByLevel />
    </TopSide>
    <BottomSide />
  </Container>
);

export default Users;
