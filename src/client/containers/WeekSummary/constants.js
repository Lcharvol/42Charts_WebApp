import {
  getWeekSummaryTotalLogTime,
  getWeekSummaryMostUsedPost,
  getWeekSummaryAllAverageLogTime,
} from '../../selectors/app';

export const summaryElems = [
  {
    id: 0,
    label: '7 past days logs',
    value: state => getWeekSummaryTotalLogTime(state),
  },
  {
    id: 1,
    label: 'My most used post',
    value: state => getWeekSummaryMostUsedPost(state),
  },
  {
    id: 2,
    label: 'Average users 7 past days logs',
    value: state => getWeekSummaryAllAverageLogTime(state),
  },
];
