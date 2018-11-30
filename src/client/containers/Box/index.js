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

const Box = ({
  width,
  height,
  label,
  content,
  headerRight,
  icon,
  minWidth = '405px',
  margin = '25px',
}) => (
  <Container width={width} height={height} minWidth={minWidth} margin={margin}>
    {!isNil(label) && (
      <Header>
        {!isNil(icon) && <LogoContainer>{icon}</LogoContainer>}
        <HeaderLabel>{label}</HeaderLabel>
        {!isNil(headerRight) && (
          <HeaderRightSide>{headerRight}</HeaderRightSide>
        )}
      </Header>
    )}
    <Content>{content}</Content>
  </Container>
);

export default Box;
