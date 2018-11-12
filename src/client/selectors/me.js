import { filter, isNil, length } from 'ramda';

export const getMe = state => state.me;

export const getMyLogin = state => state.me.login;

export const getMyCursus = state => state.me.cursus;

export const getMarks = state =>
  filter(project => project.status === 'finished', state.me.projects || []);

export const getMyLogs = state => state.me.logs;

export const getProjectsValidated = state => {
  if (isNil(state.me)) return 0;
  const {
    me: { projects },
  } = state;
  const validatedProject = filter(
    project => project.status === 'finished',
    projects,
  );
  return length(validatedProject);
};

export const getMyPromoRank = state => state.me.promoRank;

export const getMyAllRank = state => state.me.allRank;

export const getAchievementsCount = state => length(state.me.achievements);
