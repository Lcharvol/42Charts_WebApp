import React from 'react';
import { Redirect } from 'react-router';
import { length, split, takeLast } from 'ramda';

import { Container, LoginContent, Logo, LoginButton } from './styles';
import { getLogin, postLogin } from '../../requests';

const getCodeFromUrlParams = urlParams => takeLast(1, split('=', urlParams))[0];

const Login = ({ history, ...props }) => {
  const code = getCodeFromUrlParams(props.location.search);
  if (length(code) > 0)
    postLogin(code).then(jwt => {
      localStorage.setItem('chartsToken', jwt);
      window.location.replace('/');
    });
  return (
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
};

export default Login;
