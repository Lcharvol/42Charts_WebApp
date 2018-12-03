import {
  LOAD_PROMOS,
  UPDATE_WIN_WIDTH,
  LOAD_WEEK_SUMMARY,
  STORE_TOKEN,
} from '../actions/app';

const initialState = {
  promos: [],
  winWidth: window.innerWidth,
  weekSummary: {
    mostUsedPost: {},
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROMOS: {
      return { ...state, promos: ['all', ...action.promos] };
    }
    case UPDATE_WIN_WIDTH: {
      return { ...state, winWidth: action.newWinWidth };
    }
    case LOAD_WEEK_SUMMARY: {
      return { ...state, weekSummary: action.weekSummary };
    }
    case STORE_TOKEN: {
      return { ...state, [action.tokenName]: action.token };
    }
    default:
      return state;
  }
};

export default reducer;
