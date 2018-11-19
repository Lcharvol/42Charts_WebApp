import { length, reduce } from 'ramda';

export const getUser = state => state.user;

export const getUserLogs = state => state.user.logs;

export const getUserAllRank = state => state.user.allRank;

export const getUserPromoRank = state => state.user.promoRank;

export const getUserValidatedProjects = state =>
  reduce(
    (acc, project) => (project.status === 'finished' ? acc + 1 : acc),
    0,
    state.user.projects,
  );

export const getUserAchievementsCount = state => length(state.me.achievements);
