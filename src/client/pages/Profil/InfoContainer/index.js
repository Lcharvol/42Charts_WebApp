import React from 'react';

import { Container, FullName, Content } from './styles';

const InfoContainer = ({ me }) => (
  <Container>
    <FullName>{me.displayname}</FullName>
  </Container>
);

export default InfoContainer;
