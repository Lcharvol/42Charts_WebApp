export const LOAD_PROMOS = 'LOAD_PROMOS';

export const UPDATE_WIN_WIDTH = 'UPDATE_WIN_WIDTH';

export const LOAD_WEEK_SUMMARY = 'LOAD_WEEK_SUMMARY';

export const STORE_TOKEN = 'STORE_TOKEN';

export const DISPLAY_MODAL = 'DISPLAY_MODAL';

export const loadPromos = promos => dispatch =>
  dispatch({ type: LOAD_PROMOS, promos });

export const updateWinWidth = event => dispatch =>
  dispatch({
    type: UPDATE_WIN_WIDTH,
    newWinWidth: event.srcElement.innerWidth,
  });

export const loadWeekSummary = weekSummary => dispatch =>
  dispatch({
    type: LOAD_WEEK_SUMMARY,
    weekSummary,
  });

export const storeToken = (tokenName, token) => dispatch =>
  dispatch({
    type: STORE_TOKEN,
    tokenName,
    token,
  });

export const handleChangeDisplayModal = (
  newValue,
  label,
  actionId,
  placeholder = '',
) => dispatch =>
  dispatch({
    type: DISPLAY_MODAL,
    newValue,
    label,
    actionId,
    placeholder,
  });
