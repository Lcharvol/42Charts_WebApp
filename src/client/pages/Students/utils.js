import { map, length, filter, propEq, mapObjIndexed, isNil, find } from 'ramda';

import { coalitionsBackground } from '../../constants/coalitions';

export const isMyFriend = (userId, friends) =>
  length(filter(propEq('id', userId))(friends)) > 0;

export const parseTimeKeys = array =>
  map(logTimInSecond => {
    const days = Math.floor(logTimInSecond / 86400);
    return `${days} days`;
  }, array);

export const filterByCoaltition = (students, coalitionFilter) => {
  let newStudents = students;
  mapObjIndexed((value, key, obj) => {
    if (!value) {
      const coalitionObj = find(propEq('id', parseInt(key) + 1))(
        coalitionsBackground,
      );
      if (!isNil(coalitionObj)) {
        newStudents = filter(
          student => student.coalitionID !== parseInt(key) + 1,
          newStudents,
        );
      }
    }
  }, coalitionFilter);
  return newStudents;
};
