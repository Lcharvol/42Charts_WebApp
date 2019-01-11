import { isNil } from 'ramda';

import { getFormatedLogtime } from '../utils';

export const getPromos = state => state.app.promos;

export const getWinWidth = state => state.app.winWidth;

export const getWeekSummary = state => state.app.weekSummary;

export const getWeekSummaryTotalLogTime = state =>
  getFormatedLogtime(state.app.weekSummary.totalLogTime);

export const getWeekSummaryMostUsedPost = state =>
  !isNil(state.app.weekSummary.mostUsedPost)
    ? state.app.weekSummary.mostUsedPost.fullname || 'e0r0p0'
    : 'No logs';

export const getWeekSummaryAllAverageLogTime = state =>
  getFormatedLogtime(state.app.weekSummary.allAverageLogTime);

export const getChartsToken = state => state.app.chartsToken;

export const getChartsRefreshToken = state => state.app.chartsRefreshToken;

export const getWeekSummaryMoreLogedUserLogin = state =>
  state.app.weekSummary.mostLogedUsers[0].login;

export const getWeekSummaryMoreLogedUserLogTime = state =>
  getFormatedLogtime(state.app.weekSummary.mostLogedUsers[0].logtimeInSeconds);

export const getWeekSummaryMoreLogedUserId = state =>
  state.app.weekSummary.mostLogedUsers[0].id;

export const getDisplayModal = state => state.app.modal.displayModal;

export const getModalLabel = state => state.app.modal.label;

export const getModalActionId = state => state.app.modal.actionId;

export const getModalPlaceholder = state => state.app.modal.placeholder;

export const getCampus = state => state.app.campus;
