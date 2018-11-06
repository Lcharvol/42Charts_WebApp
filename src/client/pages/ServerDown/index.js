import React from 'react';
import { Redirect } from 'react-router';

import { Container } from './styles';
import Button from '../../components/Button';
import { reqPing } from '../../requests';

const ServerDown = ({ history }) => (
  <Container>
    <Button
      label={'Refresh'}
      action={() => {
        reqPing()
          .then(res => window.location.replace('/'))
          .catch(err => {
            window.location.reload();
          });
      }}
    />
  </Container>
);

export default ServerDown;
