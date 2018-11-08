import React, { Fragment } from 'react';
import { array, object, number } from 'prop-types';
import { map, split, isNil, take, find, propEq, sort } from 'ramda';

import Mark from '../../components/Mark';
import { FILTER_MARK_BUTTON_VALUES } from '../../constants/selectButtonValues';

const proptypes = {
  marks: array.isRequired,
  currentTime: object,
  sortBy: number.isRequired,
};

const getSortedMarks = (marks, sortBy) => {
  const selectedValue = find(propEq('id', sortBy), FILTER_MARK_BUTTON_VALUES);
  const sortFunc = selectedValue.sort;
  return sort(sortFunc, marks);
};

const getSince = (markedAt, currentTime) => {
  if (isNil(markedAt)) return '';
  const { currentYear, currentMonth, currentDay } = currentTime;
  const splittedDate = split('-', markedAt);
  const markedYear = parseInt(splittedDate[0]);
  const markedMonth = parseInt(splittedDate[1]);
  const markedDay = parseInt(take(2, splittedDate[2]));
  if (currentYear === markedYear && currentMonth === markedMonth)
    return `${currentDay - markedDay === 1 ? 'a' : currentDay - markedDay} day${
      currentDay - markedDay > 1 ? 's' : ''
    } ago`;
  else if (currentYear === markedYear)
    return `${
      currentMonth - markedMonth === 1 ? 'a' : currentMonth - markedMonth
    } month${currentMonth - markedMonth > 1 ? 's' : ''} ago`;
  return `${
    currentYear - markedYear === 1 ? 'a' : currentYear - markedYear
  } year${currentYear - markedYear > 1 ? 's' : ''} ago`;
};

const getRetries = retries => (retries !== 0 ? ` (${retries} retries)` : '');

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
