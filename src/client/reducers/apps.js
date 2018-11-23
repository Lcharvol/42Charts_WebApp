import { LOAD_APPS } from '../actions/apps';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APPS: {
      return [...action.apps];
    }
    default:
      return state;
  }
};

export default reducer;
