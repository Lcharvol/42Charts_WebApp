import React from 'react';
import { isNil } from 'ramda';

import {
  Container,
  Header,
  HeaderLabel,
  Content,
  HeaderRightSide,
  LogoContainer,
} from './styles';

const Box = ({ width, height, label, content, headerRight, icon }) => (
  <Container width={width} height={height}>
    {!isNil(label) && (
      <Header>
        {!isNil(icon) && <LogoContainer>{icon}</LogoContainer>}
        <HeaderLabel>{label}</HeaderLabel>
        <HeaderRightSide>{headerRight}</HeaderRightSide>
      </Header>
    )}
    <Content>{content}</Content>
  </Container>
);

export default Box;
