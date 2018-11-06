import React from 'react';
import { Redirect } from 'react-router';

import { Container } from './styles';
import Button from '../../components/Button';

const ServerDown = ({ history }) => (
  <Container>
    <Button label={'Refresh'} action={() => window.location.replace('/')} />
  </Container>
);

export default ServerDown;
