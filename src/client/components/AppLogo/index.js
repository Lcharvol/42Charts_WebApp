import React from 'react';

import {
  Container,
  LogoContainer,
  BottomSide,
  TopSide,
  OptionButton,
} from './styles';

const AppLogo = () => (
  <Container>
    <TopSide>
      <OptionButton />
    </TopSide>
    <LogoContainer />
    <BottomSide />
  </Container>
);

export default AppLogo;
