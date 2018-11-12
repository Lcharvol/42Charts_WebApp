import {
  getAchievementsCount,
  getProjectsValidated,
  getMyPromoRank,
  getMyAllRank,
  getMyCoalitionRank,
  getMyCoalitionScore,
  getHighterLogPerDay,
  getHighterLogPerMonth,
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
    label: 'My colation Rank',
  },
  {
    id: 7,
    value: state => getMyCoalitionScore(state),
    label: 'My colation score',
  },
];
