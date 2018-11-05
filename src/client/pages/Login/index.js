import React from 'react';
import { Redirect } from 'react-router';

import { Container, LoginContent, Logo, LoginButton } from './styles';
import { getLogin } from '../../requests';

const Login = ({ history }) => (
  <Container>
    <LoginContent>
      <Logo />
      <LoginButton
        onClick={() => {
          getLogin().then(redicrectUri =>
            window.location.replace(redicrectUri),
          );
        }}
      >
        Login
      </LoginButton>
    </LoginContent>
  </Container>
);

export default Login;
