import { getFormatedLogtime } from '../utils';

export const getPromos = state => state.app.promos;

export const getWinWidth = state => state.app.winWidth;

export const getWeekSummary = state => state.app.weekSummary;

export const getWeekSummaryTotalLogTime = state =>
  getFormatedLogtime(state.app.weekSummary.totalLogTime);

export const getWeekSummaryMostUsedPost = state =>
  state.app.weekSummary.mostUsedPost.fullname;

export const getWeekSummaryAllAverageLogTime = state =>
  getFormatedLogtime(state.app.weekSummary.allAverageLogTime);
