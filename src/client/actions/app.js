export const LOAD_PROMOS = 'LOAD_PROMOS';

export const loadPromos = promos => dispatch =>
  dispatch({ type: LOAD_PROMOS, promos });
