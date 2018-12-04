import { isNil, length, filter, propEq } from 'ramda';

export const getFormatedLogtime = logtimeInSeconds => {
  if (isNil(logtimeInSeconds)) return '';
  const hours = Math.floor(logtimeInSeconds / 60 / 60);
  const min = Math.floor((logtimeInSeconds - hours * 60 * 60) / 60);
  return `${hours} h ${min} min`;
};

export const isMyFriend = (userId, friends) =>
  length(filter(propEq('id', userId))(friends)) > 0;
