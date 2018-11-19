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
  getMyPreferedHostName,
  getMyPreferedHostTime,
  getAverageLogsPerSession,
  getMyAllRankEvolution,
  getMyPromoRankEvolution,
} from '../selectors/me';

import {
  getUserAllRank,
  getUserPromoRank,
  getUserValidatedProjects,
  getUserAchievementsCount,
  getUserAllRankEvolution,
  getUserPromoRankEvolution,
} from '../selectors/user';

export const MY_STATS_CONTENT = [
  {
    id: 0,
    value: state => getProjectsValidated(state),
    secondValue: state => undefined,
    label: 'Projects validated',
  },
  {
    id: 1,
    value: state => getMyPromoRank(state),
    secondValue: state => getMyPromoRankEvolution(state),
    label: 'Promo Rank',
  },
  {
    id: 2,
    value: state => getMyAllRank(state),
    secondValue: state => getMyAllRankEvolution(state),
    label: 'All Rank',
  },
  {
    id: 3,
    value: state => getHighterLogPerDay(state),
    secondValue: state => undefined,
    label: 'Highter Log/Day',
  },
  {
    id: 4,
    value: state => getHighterLogPerMonth(state),
    secondValue: state => undefined,
    label: 'Highter Log/Month',
  },
  {
    id: 5,
    value: state => getAchievementsCount(state),
    secondValue: state => undefined,
    label: 'Achievements',
  },
  {
    id: 6,
    value: state => getMyCoalitionRank(state),
    secondValue: state => undefined,
    label: 'My coaliton Rank',
  },
  {
    id: 7,
    value: state => getMyCoalitionScore(state),
    secondValue: state => undefined,
    label: 'My coaliton score',
  },
  {
    id: 8,
    value: state => getMyNumberOfLogs(state),
    secondValue: state => getAverageLogsPerSession(state),
    label: 'Number of logs',
  },
  {
    id: 9,
    value: state => getMyTotalLogTime(state),
    secondValue: state => undefined,
    label: 'Total Logtime',
  },
  {
    id: 10,
    value: state => getMyLogsAllRank(state),
    secondValue: state => undefined,
    label: 'Logs All Rank',
  },
  {
    id: 11,
    value: state => getMyLogsPromoRank(state),
    secondValue: state => undefined,
    label: 'Logs Promo Rank',
  },
  {
    id: 12,
    value: state => getMyPreferedHostName(state),
    secondValue: state => getMyPreferedHostTime(state),
    label: 'Most used Computer',
  },
];

export const USER_STATS_CONTENT = [
  {
    id: 0,
    value: state => getUserAllRank(state),
    secondValue: state => getUserAllRankEvolution(state),
    label: 'All Rank',
  },
  {
    id: 1,
    value: state => getUserPromoRank(state),
    secondValue: state => getUserPromoRankEvolution(state),
    label: 'Promo Rank',
  },
  {
    id: 2,
    value: state => getUserValidatedProjects(state),
    secondValue: state => undefined,
    label: 'Validated Projects',
  },
  {
    id: 3,
    value: state => getUserAchievementsCount(state),
    secondValue: state => undefined,
    label: 'Achievements',
  },
];
