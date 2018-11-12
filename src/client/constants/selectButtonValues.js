import { split, take } from 'ramda';

import { getDayLog, getMonthLog } from '../containers/Logs/utils';

export const FILTER_MARK_BUTTON_VALUES = [
  {
    id: 0,
    label: 'By time',
    sort: (a, b) => {
      const aSplittedDate = split('-', a.markedAt);
      const bSplittedDate = split('-', b.markedAt);
      const aYear = parseInt(aSplittedDate[0]);
      const bYear = parseInt(bSplittedDate[0]);
      const aMonth = parseInt(aSplittedDate[1]);
      const bMonth = parseInt(bSplittedDate[1]);
      const aDay = parseInt(take(2, aSplittedDate[2]));
      const bDay = parseInt(take(2, bSplittedDate[2]));
      if (aYear === bYear) {
        if (aMonth === bMonth) {
          if (aDay === bDay) return true;
          return bDay - aDay;
        }
        return bMonth - aMonth;
      }
      return bYear - aYear;
    },
  },
  {
    id: 1,
    label: 'By marks',
    sort: (a, b) => b.finalMark - a.finalMark,
  },
  {
    id: 2,
    label: 'By name',
    sort: (a, b) => a.name.localeCompare(b.name),
  },
  {
    id: 3,
    label: 'By retries',
    sort: (a, b) => b.retries - a.retries,
  },
];

export const LOGS_FILTER_VALUES = [
  {
    id: 0,
    label: 'By Month',
    nbValue: 30,
    getUnitLog: getDayLog,
  },
  {
    id: 1,
    label: 'By Year',
    nbValue: 12,
    getUnitLog: getMonthLog,
  },
];
