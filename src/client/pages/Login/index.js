import React from 'react';

import { Container, LoginContent, Logo, LoginButton } from './styles';

const Login = () => (
  <Container>
    <LoginContent>
      <Logo />
      <LoginButton to={'/'}>Login</LoginButton>
    </LoginContent>
  </Container>
);

export default Login;
