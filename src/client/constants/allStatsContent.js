import {
  getAchievementsCount,
  getProjectsValidated,
  getMyPromoRank,
  getMyAllRank,
  getMyCoalitionRank,
  getMyCoalitionScore,
  getHighterLogPerDay,
  getHighterLogPerMonth,
  getMyNumberOfLogs,
  getMyTotalLogTime,
  getMyLogsAllRank,
  getMyLogsPromoRank,
  getMyPreferedHost,
} from '../selectors/me';

export const ALL_STATS_CONTENT = [
  {
    id: 0,
    value: state => getProjectsValidated(state),
    label: 'Projects validated',
  },
  {
    id: 1,
    value: state => getMyPromoRank(state),
    label: 'Promo Rank',
  },
  {
    id: 2,
    value: state => getMyAllRank(state),
    label: 'All Rank',
  },
  {
    id: 3,
    value: state => getHighterLogPerDay(state),
    label: 'Highter Log/Day',
  },
  {
    id: 4,
    value: state => getHighterLogPerMonth(state),
    label: 'Highter Log/Month',
  },
  {
    id: 5,
    value: state => getAchievementsCount(state),
    label: 'Achievements',
  },
  {
    id: 6,
    value: state => getMyCoalitionRank(state),
    label: 'My coaliton Rank',
  },
  {
    id: 7,
    value: state => getMyCoalitionScore(state),
    label: 'My coaliton score',
  },
  {
    id: 8,
    value: state => getMyNumberOfLogs(state),
    label: 'Number of logs',
  },
  {
    id: 9,
    value: state => getMyTotalLogTime(state),
    label: 'Total Logtime',
  },
  {
    id: 10,
    value: state => getMyLogsAllRank(state),
    label: 'Logs All Rank',
  },
  {
    id: 11,
    value: state => getMyLogsPromoRank(state),
    label: 'Logs Promo Rank',
  },
  {
    id: 12,
    value: state => getMyPreferedHost(state),
    label: 'Most used Computer',
  },
];
