import React from 'react';
import { isNil } from 'ramda';

import {
  Container,
  Header,
  HeaderLabel,
  Content,
  HeaderLeftSide,
} from './styles';

const Box = ({ width, height, label, content, headerLeft }) => (
  <Container width={width} height={height}>
    {!isNil(label) && (
      <Header>
        <HeaderLabel>{label}</HeaderLabel>
        <HeaderLeftSide>{headerLeft}</HeaderLeftSide>
      </Header>
    )}
    <Content>{content}</Content>
  </Container>
);

export default Box;
