import { reduce, filter, propEq, sort } from 'ramda';
import { ALL_PROMO_SELECTED } from '../Students/constants';

export const getFileredAndSortedFriends = (
  friends,
  selectedPromo,
  filterBy,
) => {
  const friendsFiterByPromo =
    selectedPromo !== ALL_PROMO_SELECTED
      ? filter(propEq('promo', parseInt(selectedPromo)), friends)
      : friends;
  const filterByValue = filterBy === 0 ? 'cursusLevel' : 'totalLogTime';
  return sort(
    (first, second) => second[filterByValue] - first[filterByValue],
    friendsFiterByPromo,
  );
};

export const getFriendsByUnit = friends => {
  let friendsByUnits = new Array(28).fill(0, 0);
  friendsByUnits.map((unit, id) => {
    const value = reduce(
      (acc, friend) =>
        friend.cursusLevel >= id && friend.cursusLevel < id + 1 ? acc + 1 : acc,
      0,
      friends,
    );
    friendsByUnits[id] = value;
  });
  return friendsByUnits;
};
