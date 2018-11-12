import { filter, isNil, length, map, split, take } from 'ramda';

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

export const getMyCoalitionScore = state => state.me.coalition.userScore;

export const getMyCoalitionRank = state => state.me.coalition.userRank;

export const getHighterLogPerDay = state => {
  const {
    me: { logs = [] },
  } = state;
  let highterLog = 0;
  let actualHighterLog = 0;
  let actualDay = 0;
  let actualMonth = 0;
  let actualYear = 0;
  map(log => {
    const { beginAt } = log;
    const splittedDate = split('-', beginAt);
    const year = parseInt(splittedDate[0]);
    const month = parseInt(splittedDate[1]);
    const day = parseInt(take(2, splittedDate[2]));
    if (actualDay === day && actualMonth === month && actualYear === year) {
      actualHighterLog += log.logtimeInSeconds;
    } else {
      if (actualHighterLog > highterLog) highterLog = actualHighterLog;
      actualHighterLog = 0;
      actualDay = day;
      actualMonth = month;
      actualYear = year;
    }
  }, logs);
  const hours = Math.floor(highterLog / 60 / 60);
  const min = Math.floor((highterLog - hours * 60 * 60) / 60);
  return `${hours} h ${min} min`;
};

export const getHighterLogPerMonth = state => {
  const {
    me: { logs = [] },
  } = state;
  let highterLog = 0;
  let actualHighterLog = 0;
  let actualMonth = 0;
  let actualYear = 0;
  map(log => {
    const { beginAt } = log;
    const splittedDate = split('-', beginAt);
    const year = parseInt(splittedDate[0]);
    const month = parseInt(splittedDate[1]);
    if (actualMonth === 0 || actualYear === 0) {
      actualMonth = month;
      actualYear = year;
    }
    if (actualMonth === month && actualYear === year) {
      actualHighterLog += log.logtimeInSeconds;
    } else {
      if (actualHighterLog > highterLog) highterLog = actualHighterLog;
      actualHighterLog = 0;
      actualMonth = month;
      actualYear = year;
    }
  }, logs);
  const hours = Math.floor(highterLog / 60 / 60);
  const min = Math.floor((highterLog - hours * 60 * 60) / 60);
  return `${hours} h ${min} min`;
};
