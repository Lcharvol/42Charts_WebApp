import { length, filter, propEq } from 'ramda';

export const isMyFriend = (userId, friends) =>
  length(filter(propEq('id', userId))(friends)) > 0;
