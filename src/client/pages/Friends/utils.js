import { reduce } from 'ramda';

export const getFileredAndSortedFriends = (
  friends,
  selectedPromo,
  filterBy,
) => {
  const friendsFiterByPromo = '';
  return friends;
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
