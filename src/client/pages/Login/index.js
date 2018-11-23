import React from 'react';
import { length, split, takeLast, isNil } from 'ramda';

import { Container, LoginContent, Logo, LoginButton } from './styles';
import { getLogin, postLogin } from '../../requests';
import Spinner from '../../components/Spinner';

const extractUrlValue = (key, url) => {
  if (typeof url === 'undefined') url = window.location.href;
  var match = url.match('[?&]' + key + '=([^&]+)');
  return match ? match[1] : null;
};

const Login = ({ history, ...props }) => {
  const token = extractUrlValue('token');
  const refreshToken = extractUrlValue('refresh');
  const isFetching = !isNil(token) && !isNil(refreshToken);
  if (isFetching) {
    localStorage.setItem('chartsToken', token);
    localStorage.setItem('chartsRefreshToken', refreshToken);
    window.location.reload();
  }
  return (
    <Container>
      <LoginContent>
        <Logo />
        {!isFetching ? (
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
