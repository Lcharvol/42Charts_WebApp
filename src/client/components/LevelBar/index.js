import React from 'react';
import { split, takeLast, length } from 'ramda';

import { Container, Content, Label } from './styles';

const LevelBar = ({ level, color, gradientColor }) => {
  const stringLevel = level.toString();
  const stringPercent = takeLast(1, split('.', stringLevel))[0];
  const lvl = Math.floor(level);
  const percent =
    length(stringPercent) < 2 ? `${stringPercent}0` : stringPercent;
  return (
    <Container>
      <Label>{`level ${lvl} - ${percent}%`}</Label>
      <Content value={percent} color={color} gradientColor={gradientColor} />
    </Container>
  );
};

export default LevelBar;
