import { findIndex, propEq } from 'ramda';

import { LOAD_APPS, LIKE_APP, UNLIKE_APP } from '../actions/apps';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APPS: {
      return [...action.apps];
    }
    case LIKE_APP: {
      console.log('like');
      const appIndex = findIndex(propEq('id', action.appId))(state);
      console.log('appIndex: ', appIndex);
      let newApps = state;
      newApps[appIndex] = {
        ...newApps[appIndex],
        liked: true,
        nbLikes: newApps[appIndex].nbLikes + 1,
      };
      return [...newApps];
    }
    case UNLIKE_APP: {
      const appIndex = findIndex(propEq('id', action.appId))(state);
      let newApps = state;
      newApps[appIndex] = {
        ...newApps[appIndex],
        liked: false,
        nbLikes: newApps[appIndex].nbLikes - 1,
      };
      return [...newApps];
    }
    default:
      return state;
  }
};

export default reducer;
