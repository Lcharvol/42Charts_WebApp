import { isNil, length, filter, propEq } from 'ramda';

export const getFormatedLogtime = logtimeInSeconds => {
  if (isNil(logtimeInSeconds)) return '';
  const hours = Math.floor(logtimeInSeconds / 60 / 60);
  const min = Math.floor((logtimeInSeconds - hours * 60 * 60) / 60);
  return `${hours} h ${min} min`;
};

export const getFormatedLogtimeInDay = logtimeInSeconds => {
  const days = Math.floor(logtimeInSeconds / 86400);
  const hours = Math.floor((logtimeInSeconds - days * 86400) / 3600);
  return `${days} D ${hours} H`;
};

export const isMyFriend = (userId, friends) =>
  length(filter(propEq('id', userId))(friends)) > 0;

export const getSmicFromLog = logtimeInSeconds => {
  const hours = Math.floor(logtimeInSeconds / 3600);
  return `${hours * 7.83} € S.M.I.C (net)`;
};
