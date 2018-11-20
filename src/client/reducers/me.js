import { ENHANCE_ME } from '../actions/me';

const initialState = {
  projects: [],
  achievements: [],
  coalition: {
    userScore: 0,
    userRank: 0,
  },
  logs: {
    logs: {},
    higherLogInADay: {
      logtimeInSeconds: 0,
    },
    higherLogInMonth: {
      logtimeInSeconds: 0,
    },
    hostPrefered: {
      logtimeInSeconds: 0,
    },
  },
  infos: {
    logs: {},
  },
  cursus: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENHANCE_ME: {
      return { ...state, ...action.me };
    }
    default:
      return state;
  }
};

export default reducer;
