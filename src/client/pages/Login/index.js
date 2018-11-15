import React from 'react';
import { length, split, takeLast, isNil } from 'ramda';

import { Container, LoginContent, Logo, LoginButton } from './styles';
import { getLogin, postLogin } from '../../requests';
import Spinner from '../../components/Spinner';

const getCodeFromUrlParams = urlParams => takeLast(1, split('=', urlParams))[0];

const Login = ({ history, ...props }) => {
  const code = getCodeFromUrlParams(props.location.search);
  if (length(code) > 0 && !isNil(code)) {
    localStorage.setItem('chartsToken', code);
    window.location.reload();
  }
  return (
    <Container>
      <LoginContent>
        <Logo />
        {length(code) === 0 ? (
          <LoginButton
            onClick={() => {
              getLogin().then(redicrectUri =>
                window.location.replace(redicrectUri),
              );
            }}
          >
            Login
          </LoginButton>
        ) : (
          <Spinner />
        )}
      </LoginContent>
    </Container>
  );
};

export default Login;
