import { LOAD_PROMOS, UPDATE_WIN_WIDTH } from '../actions/app';

const initialState = {
  promos: [],
  winWidth: window.innerWidth,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROMOS: {
      return { ...state, promos: ['all', ...action.promos] };
    }
    case UPDATE_WIN_WIDTH: {
      return { ...state, winWidth: action.newWinWidth };
    }
    default:
      return state;
  }
};

export default reducer;
