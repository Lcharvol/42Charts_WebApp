import { LOAD_PROMOS } from '../actions/app';
import { values } from 'ramda';

const initialState = {
  promos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROMOS: {
      return { ...state, promos: ['all', ...action.promos] };
    }
    default:
      return state;
  }
};

export default reducer;
