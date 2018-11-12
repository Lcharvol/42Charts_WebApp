import React, { Fragment } from 'react';
import { array, object, number } from 'prop-types';
import { map } from 'ramda';

import Mark from '../../components/Mark';
import { getSortedMarks, getSince, getRetries } from './utils';

const proptypes = {
  marks: array.isRequired,
  currentTime: object,
  sortBy: number.isRequired,
};

const Marks = ({ marks, currentTime, sortBy }) => (
  <Fragment>
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
  </Fragment>
);

Marks.proptypes = proptypes;

export default Marks;
