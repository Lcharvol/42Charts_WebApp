import React from 'react';
import { isNil } from 'ramda';

import { Container, Header, Label, Content } from './styles';

const Box = ({ width, height, label, content }) => (
  <Container width={width} height={height}>
    {!isNil(label) && (
      <Header>
        <Label>{label}</Label>
      </Header>
    )}
    <Content>{content}</Content>
  </Container>
);

export default Box;
