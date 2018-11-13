import { split, isNil, take, find, propEq, sort, length } from 'ramda';

import { FILTER_MARK_BUTTON_VALUES } from '../../constants/selectButtonValues';

export const getSortedMarks = (marks, sortBy) => {
  const selectedValue = find(propEq('id', sortBy), FILTER_MARK_BUTTON_VALUES);
  if (isNil(selectedValue) || length(selectedValue) === 0) return '';
  const sortFunc = selectedValue.sort;
  return sort(sortFunc, marks);
};

export const getSince = (markedAt, currentTime) => {
  if (isNil(markedAt) || length(markedAt) === 0) return '';
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

export const getRetries = retries =>
  retries !== 0 ? ` (${retries} retries)` : '';
