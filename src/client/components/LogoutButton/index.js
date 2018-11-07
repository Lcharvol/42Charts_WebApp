import React from 'react';

import { Container } from './styles';

const LogoutButton = () => (
  <Container
    onClick={() => {
      localStorage.setItem('chartsToken', '');
      window.location.replace('/login');
    }}
  />
);

export default LogoutButton;
