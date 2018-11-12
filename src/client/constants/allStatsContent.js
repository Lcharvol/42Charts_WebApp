import {
  getAchievementsCount,
  getProjectsValidated,
  getMyPromoRank,
  getMyAllRank,
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
    value: state => getProjectsValidated(state),
    label: 'Higher Log/Day',
  },
  {
    id: 4,
    value: state => getProjectsValidated(state),
    label: 'Higher Log/Month',
  },
  {
    id: 5,
    value: state => getAchievementsCount(state),
    label: 'Achievements',
  },
];
