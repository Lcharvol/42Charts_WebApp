import { filter } from 'ramda';

export const getMe = state => state.me;

export const getMyLogin = state => state.me.login;

export const getMyCursus = state => state.me.cursus;

export const getMarks = state =>
  filter(project => project.status === 'finished', state.me.projects || []);
