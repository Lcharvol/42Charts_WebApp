import React from 'react';
import { split } from 'ramda';

import { Container, Content, Label } from './styles';

const LevelBar = ({ level }) => {
  const lvl = Math.floor(level);
  const percent = parseInt(split('.', `${level}`)[1]);
  return (
    <Container>
      <Label>{`level ${lvl} - ${percent}%`}</Label>
      <Content value={50} />
    </Container>
  );
};

export default LevelBar;
