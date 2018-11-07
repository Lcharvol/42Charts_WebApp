import React from 'react';

import { Container, Name, FinalMark, Since } from './styles';
import { FAIL_MARK_COLOR, VALIDATED_MARK_COLOR } from '../../constants/colors';

const Mark = ({ mark, since }) => (
  <Container>
    <Name>{mark.name}</Name>
    <Since>{since}</Since>
    <FinalMark color={mark.validated ? VALIDATED_MARK_COLOR : FAIL_MARK_COLOR}>
      {mark.finalMark}
    </FinalMark>
  </Container>
);

export default Mark;
