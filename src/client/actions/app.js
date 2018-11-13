export const LOAD_PROMOS = 'LOAD_PROMOS';

export const LOAD_INFOS = 'LOAD_INFOS';

export const loadPromos = promos => dispatch =>
  dispatch({ type: LOAD_PROMOS, promos });

export const loadInfos = infos => dispatch =>
  dispatch({ type: LOAD_INFOS, infos });
