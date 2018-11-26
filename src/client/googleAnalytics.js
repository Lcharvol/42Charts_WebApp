import ReactGA from 'react-ga';
import { find, propEq } from 'ramda';

import {
  SEARCH,
  SORT,
  ADD_FRIEND,
  REMOVE_FRIEND,
  VIEW_STUDENT,
} from './constants/GaLabels';

export const initializeGa = () => {
  ReactGA.initialize('UA-46037096-3');
};

export const setUserGa = (login, userId) => {
  ReactGA.set({ login, userId });
};

export const visitePageGa = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

const events = [
  {
    id: 0,
    label: SEARCH,
    getEvent: searchValue => ({
      category: 'User',
      action: 'Search',
      label: searchValue,
    }),
  },
  {
    id: 1,
    label: SORT,
    getEvent: sortValue => ({
      category: 'User',
      action: 'Sort',
      label: sortValue,
    }),
  },
  {
    id: 2,
    label: ADD_FRIEND,
    getEvent: () => ({
      category: 'Friend',
      action: 'Add',
      label: '',
    }),
  },
  {
    id: 3,
    label: REMOVE_FRIEND,
    getEvent: () => ({
      category: 'Friend',
      action: 'Remove',
      label: '',
    }),
  },
  {
    id: 3,
    label: VIEW_STUDENT,
    getEvent: studentName => ({
      category: 'Students',
      action: 'View',
      label: studentName,
    }),
  },
];

export const getEventByLabel = eventLabel =>
  find(propEq('label', eventLabel))(events);

export const eventGa = (eventLabel, value) =>
  ReactGA.event(getEventByLabel(eventLabel).getEvent(value));
