import React from 'react';
import { split } from 'ramda';

import { Container, Content, Label } from './styles';

const LevelBar = ({ level, color }) => {
  const lvl = Math.floor(level);
  const percent = parseInt(split('.', `${level}`)[1] || 0);
  return (
    <Container>
      <Label>{`level ${lvl} - ${percent}%`}</Label>
      <Content value={percent} color={color} />
    </Container>
  );
};

export default LevelBar;
