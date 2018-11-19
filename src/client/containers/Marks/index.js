import React, { Fragment } from 'react';
import { array, object, number } from 'prop-types';
import { map } from 'ramda';

import Mark from '../../components/Mark';
import { getSortedMarks, getSince, getRetries } from './utils';
import { Container, EndBlock } from './styles';

const proptypes = {
  marks: array.isRequired,
  currentTime: object,
  sortBy: number.isRequired,
};

const Marks = ({ marks, currentTime, sortBy }) => (
  <Container>
    {map(
      mark => (
        <Mark
          key={mark.id}
          mark={mark}
          since={`${getSince(mark.markedAt, currentTime)}${getRetries(
            mark.retries,
          )}`}
        />
      ),
      getSortedMarks(marks, sortBy),
    )}
    <EndBlock />
  </Container>
);

Marks.proptypes = proptypes;

export default Marks;
