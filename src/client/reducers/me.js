import { filter } from 'ramda';

import { ENHANCE_ME, ADD_FRIEND, REMOVE_FRIEND } from '../actions/me';

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
  friends: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENHANCE_ME: {
      return { ...state, ...action.me };
    }
    case ADD_FRIEND: {
      return {
        ...state,
        friends: [...state.friends, action.newFriend],
      };
    }
    case REMOVE_FRIEND: {
      return {
        ...state,
        friends: filter(friend => friend.id !== action.friendId, state.friends),
      };
    }
    default:
      return state;
  }
};

export default reducer;
