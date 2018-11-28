import { map, length, filter, propEq } from 'ramda';

export const isMyFriend = (userId, friends) =>
  length(filter(propEq('id', userId))(friends)) > 0;

export const parseTimeKeys = array =>
  map(logTimInSecond => {
    const days = Math.floor(logTimInSecond / 86400);
    return `${days} days`;
  }, array);
