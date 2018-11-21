export const ENHANCE_ME = 'ENHANCE_ME';

export const ADD_FRIEND = 'ADD_FRIEND';

export const REMOVE_FRIEND = 'REMOVE_FRIEND';

export const enhanceMe = me => dispatch =>
  dispatch({
    type: ENHANCE_ME,
    me,
  });

export const addFriend = newFriend => dispatch =>
  dispatch({
    type: ADD_FRIEND,
    newFriend,
  });

export const removeFriend = friendId => dispatch =>
  dispatch({
    type: REMOVE_FRIEND,
    friendId,
  });
