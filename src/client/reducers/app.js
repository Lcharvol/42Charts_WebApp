import {
  LOAD_PROMOS,
  UPDATE_WIN_WIDTH,
  LOAD_WEEK_SUMMARY,
  STORE_TOKEN,
  DISPLAY_MODAL,
  LOAD_CAMPUS,
} from '../actions/app';

const initialState = {
  promos: [],
  winWidth: window.innerWidth,
  weekSummary: {
    mostUsedPost: {},
  },
  modal: {
    displayModal: false,
    modalLabel: undefined,
    actionId: undefined,
    placeholder: undefined,
  },
  campus: [{ id: 0, name: 'all' }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROMOS: {
      return { ...state, promos: ['all', ...action.promos] };
    }
    case LOAD_CAMPUS: {
      return { ...state, campus: [...state.campus, ...action.campus] };
    }
    case DISPLAY_MODAL: {
      return {
        ...state,
        modal: {
          ...state.modal,
          displayModal: action.newValue,
          label: action.label,
          actionId: action.actionId,
          placeholder: action.placeholder,
        },
      };
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
