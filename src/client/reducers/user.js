import { LOAD_USER, LOAD_USER_LOGS, RESET_USER } from '../actions/user';

const initialState = {
  coalition: {},
  logs: {
    logs: {},
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER: {
      return { ...state, ...action.user };
    }
    case LOAD_USER_LOGS: {
      return { ...state, logs: action.logs };
    }
    case LOAD_USER_LOGS: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
