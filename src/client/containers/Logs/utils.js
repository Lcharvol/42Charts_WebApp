import { filter, split, length, isNil, take, reduce } from 'ramda';

import { SEC_PER_DAY, SEC_PER_MONTH } from './constants';

export const getMonthLabel = monthId => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[monthId];
};

export const getDayLog = (dayId, logs, selectedYear, selectedMonth) => {
  if (length(logs) === 0 || isNil(logs)) return 0;
  const isGoodDay = log => {
    const { beginAt } = log;
    const splittedDate = split('-', beginAt);
    const month = parseInt(splittedDate[1]);
    const day = parseInt(take(2, splittedDate[2]));
    const year = parseInt(splittedDate[0]);
    return day === dayId && month === selectedMonth && year === selectedYear;
  };
  const logsOfTheDay = filter(isGoodDay, logs);
  const reducedLogsOfTheDay = reduce(
    (acc, log) => acc + log.logtimeInSeconds,
    0,
    logsOfTheDay,
  );
  return (reducedLogsOfTheDay / SEC_PER_DAY) * 100;
};

export const getMonthLog = (monthId, logs, selectedYear, selectedMonth) => {
  if (length(logs) === 0 || isNil(logs)) return 0;
  const isGoodMonth = log => {
    const { beginAt } = log;
    const splittedDate = split('-', beginAt);
    const year = parseInt(splittedDate[0]);
    const month = parseInt(splittedDate[1]);
    return month === monthId + 1 && year === selectedYear;
  };
  const logsOfTheMonth = filter(isGoodMonth, logs);
  const reducedLogsOfTheMonth = reduce(
    (acc, log) => acc + log.logtimeInSeconds,
    0,
    logsOfTheMonth,
  );
  return (reducedLogsOfTheMonth / SEC_PER_MONTH) * 100;
};
