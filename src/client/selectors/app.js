import { reduce } from 'ramda';

export const getPromos = state => state.app.promos;

export const getInfos = state => state.app.infos;

export const getUsersByLevels = state => state.app.infos.usersByLevels;

export const getTotalUsers = state =>
  reduce((acc, count) => acc + count, 0, state.app.infos.usersByLevels);
