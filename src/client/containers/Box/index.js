import React from 'react';
import { isNil } from 'ramda';

import {
  Container,
  Header,
  HeaderLabel,
  Content,
  HeaderLeftSide,
  LogoContainer,
} from './styles';

const Box = ({ width, height, label, content, headerLeft, logo }) => (
  <Container width={width} height={height}>
    {!isNil(label) && (
      <Header>
        <LogoContainer>{logo}</LogoContainer>
        <HeaderLabel>{label}</HeaderLabel>
        <HeaderLeftSide>{headerLeft}</HeaderLeftSide>
      </Header>
    )}
    <Content>{content}</Content>
  </Container>
);

export default Box;
