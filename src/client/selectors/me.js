import { filter, isNil, length, map, split, take } from 'ramda';

export const getMe = state => state.me;

export const getMyLogin = state => state.me.login;

export const getMyCursus = state => state.me.cursus;

export const getMarks = state =>
  filter(project => project.status === 'finished', state.me.projects || []);

export const getMyLogs = state => state.me.logs.logs;

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

export const getMyCoalition = state => state.me.coalition;

export const getMyCoalitionScore = state => state.me.coalition.userScore;

export const getMyCoalitionRank = state => state.me.coalition.userRank;

export const getHighterLogPerDay = state => {
  const {
    me: {
      logs: {
        higherLogInADay: { logtimeInSeconds },
      },
    },
  } = state;
  const hours = Math.floor(logtimeInSeconds / 60 / 60);
  const min = Math.floor((logtimeInSeconds - hours * 60 * 60) / 60);
  return `${hours} h ${min} min`;
};

export const getHighterLogPerMonth = state => {
  const logtimeInSeconds = state.me.logs.higherLogInMonth.logtimeInSeconds;
  const hours = Math.floor(logtimeInSeconds / 60 / 60);
  const min = Math.floor((logtimeInSeconds - hours * 60 * 60) / 60);
  return `${hours} h ${min} min`;
};

export const getMyNumberOfLogs = state => state.me.logs.numberOfLogs;

export const getMyTotalLogTime = state => {
  const logTimInSecond = state.me.logs.totalLogTime;
  const days = Math.floor(logTimInSecond / 86400);
  const hours = Math.floor((logTimInSecond - days * 86400) / 3600);
  return `${days} D ${hours} H`;
};

export const getMyLogsAllRank = state => state.me.logs.allRank;

export const getMyLogsPromoRank = state => state.me.logs.promoRank;

export const getMyPreferedHost = state => {
  const { name, logtimeInSeconds } = state.me.logs.hostPrefered;
  const days = Math.floor(logtimeInSeconds / 86400);
  const hours = Math.floor((logtimeInSeconds - days * 86400) / 3600);
  return `${name} ${days} D ${hours} H`;
};
