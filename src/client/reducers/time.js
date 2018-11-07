import { ENHANCE_TIME } from '../actions/time';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENHANCE_TIME: {
      return { ...state, ...action.newValues };
    }
    default:
      return state;
  }
};

export default reducer;
