import { ENHANCE_ME } from '../actions/me';

const initialState = {};

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
