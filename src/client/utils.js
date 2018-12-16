import { isNil, length, filter, propEq } from 'ramda';

export const getFormatedLogtime = logtimeInSeconds => {
  if (isNil(logtimeInSeconds)) return '0 h 0 min';
  const hours = Math.floor(logtimeInSeconds / 60 / 60);
  const min = Math.floor((logtimeInSeconds - hours * 60 * 60) / 60);
  return `${hours} h ${min} min`;
};

export const getFormatedLogtimeInDay = logtimeInSeconds => {
  if (isNil(logtimeInSeconds)) return '0 D 0 H';
  const days = Math.floor(logtimeInSeconds / 86400);
  const hours = Math.floor((logtimeInSeconds - days * 86400) / 3600);
  return `${days} D ${hours} H`;
};

export const isMyFriend = (userId, friends) =>
  length(filter(propEq('id', userId))(friends)) > 0;

export const getSmicFromLog = logtimeInSeconds => {
  const hours = Math.floor(logtimeInSeconds / 3600);
  return `${Math.floor(hours * 7.83)} € S.M.I.C (net)`;
};

export const getRandomNumber = (min, max) =>
  Math.round(min + Math.random() * (max - min));
