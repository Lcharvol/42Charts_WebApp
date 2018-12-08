import { LOAD_PROJECTS } from '../actions/projects';

const initialState = {
  allProjects: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS: {
      return { ...state, allProjects: action.allProjects };
    }
    default:
      return state;
  }
};

export default reducer;
