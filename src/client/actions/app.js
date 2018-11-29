export const LOAD_PROMOS = 'LOAD_PROMOS';

export const UPDATE_WIN_WIDTH = 'UPDATE_WIN_WIDTH';

export const loadPromos = promos => dispatch =>
  dispatch({ type: LOAD_PROMOS, promos });

export const updateWinWidth = event => dispatch =>
  dispatch({
    type: UPDATE_WIN_WIDTH,
    newWinWidth: event.srcElement.innerWidth,
  });
