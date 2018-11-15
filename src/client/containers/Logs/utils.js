import { length, isNil, isEmpty, map } from 'ramda';

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

export const getMonthLabel = monthId => months[monthId];

export const getDayLog = (dayId, logs, selectedYear, selectedMonth) => {
  if (isEmpty(logs) || length(logs) === 0 || isNil(logs)) return 0;
  const logsOfSelectedYear = logs[selectedYear];
  if (
    isEmpty(logsOfSelectedYear) ||
    length(logsOfSelectedYear) === 0 ||
    isNil(logsOfSelectedYear)
  )
    return 0;
  const logsOfSelectedMonth = logsOfSelectedYear[selectedMonth - 1];
  if (
    isEmpty(logsOfSelectedMonth) ||
    length(logsOfSelectedMonth) === 0 ||
    isNil(logsOfSelectedMonth)
  )
    return 0;
  return logsOfSelectedMonth[dayId] || 0;
};

export const getMonthLog = (monthId, logs, selectedYear, selectedMonth) => {
  let ret = 0;
  if (isEmpty(logs) || length(logs) === 0 || isNil(logs)) return 0;
  const logsOfSelectedYear = logs[selectedYear];
  if (
    isEmpty(logsOfSelectedYear) ||
    length(logsOfSelectedYear) === 0 ||
    isNil(logsOfSelectedYear)
  )
    return 0;
  const logsOfSelectedMonth = logsOfSelectedYear[monthId - 1];
  if (
    isEmpty(logsOfSelectedMonth) ||
    length(logsOfSelectedMonth) === 0 ||
    isNil(logsOfSelectedMonth)
  )
    return 0;
  map(log => {
    ret += log;
  }, logsOfSelectedMonth);
  return ret;
};

export const getTotalTimeOfSelectedLogsFilter = (
  logs,
  nbValue,
  selectedYear,
  selectedMonth,
) => {
  const logsOfYear = logs[selectedYear];
  if (isEmpty(logsOfYear) || isNil(logsOfYear)) return '0 h 0 min';
  const logsOfMonth = logsOfYear[selectedMonth];
  let sum = 0;
  if (nbValue === 12) {
    map(month => {
      map(day => {
        sum += day;
      }, month);
    }, logsOfYear);
  } else {
    if (isEmpty(logsOfMonth) || isNil(logsOfMonth)) return '0 h 0 min';
    map(day => (sum += day), logsOfMonth);
  }
  const hours = Math.floor(sum / 3600);
  const min = Math.floor((sum - hours * 3600) / 60);
  return `${hours} h ${min} min`;
};

export const getHoverInfo = (hoveredUnitId, nbValue) => {
  const months = ['Jan'];
  if (nbValue === 12) return getMonthLabel(hoveredUnitId) || '';
  return !isNil(hoveredUnitId) ? hoveredUnitId + 1 : '';
};
