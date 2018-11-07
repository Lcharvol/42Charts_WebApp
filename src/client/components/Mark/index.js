import React from 'react';

import { Container, Name, FinalMark } from './styles';
import { FAIL_MARK_COLOR, VALIDATED_MARK_COLOR } from '../../constants/colors';

const Mark = ({ mark }) => (
  <Container>
    <Name>{mark.name}</Name>
    {console.log('mark: ', mark)}
    <FinalMark color={mark.validated ? VALIDATED_MARK_COLOR : FAIL_MARK_COLOR}>
      {mark.finalMark}
    </FinalMark>
  </Container>
);

export default Mark;
