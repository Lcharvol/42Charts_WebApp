import React from 'react';

import { Container, Text, Content } from './styles';
import Button from '../../components/Button';
import { reqPing } from '../../requests';

const ServerDown = () => (
  <Container>
    <Content>
      <Text>OUPS!</Text>
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
    </Content>
  </Container>
);

export default ServerDown;
