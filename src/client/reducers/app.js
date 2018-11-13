import { LOAD_PROMOS, LOAD_INFOS } from '../actions/app';
import { values } from 'ramda';

const initialState = {
  promos: [],
  infos: {
    usersByLevels: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROMOS: {
      return { ...state, promos: ['all', ...action.promos] };
    }
    case LOAD_INFOS: {
      return {
        ...state,
        infos: {
          ...action.infos,
          usersByLevels: values(action.infos.usersByLevels),
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
