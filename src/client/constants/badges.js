import React from 'react';
import { find, propEq, isNil, isEmpty } from 'ramda';
import { MdAccessTime } from 'react-icons/md';

import {
  GOLD_MEDAL_COLOR,
  SILVER_MEDAL_COLOR,
  BRONZE_MEDAL_COLOR,
} from '../constants/colors';
import {
  getMy42CursusLevel,
  getMyTotalLogTime,
  getMyCoalitionScore,
} from '../selectors/me';
import {
  getUser42CursusLevel,
  getUserTotalLogTime,
  getUserCoalitionScore,
} from '../selectors/user';
import {
  getBadgeIconFromLevel,
  getBadgeIconFromLogTime,
  getBadgeIconFromCoalitionScore,
} from '../utils';

export const badges = [
  {
    id: 0,
    label: 'Logtime',
    color: BRONZE_MEDAL_COLOR,
    logo: <MdAccessTime />,
    requirement: user =>
      user.totalLogTime > 8640000 && user.totalLogTime < 17280000,
    hoverValue: 'More than 100 days of logs',
  },
  {
    id: 1,
    label: 'Logtime',
    color: SILVER_MEDAL_COLOR,
    logo: <MdAccessTime />,
    hoverValue: 'More than 200 days of logs',
    requirement: user =>
      user.totalLogTime > 17280000 && user.totalLogTime < 25920000,
  },
  {
    id: 2,
    label: 'Logtime',
    color: GOLD_MEDAL_COLOR,
    logo: <MdAccessTime />,
    hoverValue: 'More than 300 days of logs',
    requirement: user => user.totalLogTime > 25920000,
  },
];

export const myBadges = [
  {
    id: 0,
    label: 'Level',
    selector: state => getMy42CursusLevel(state),
    getBadgeIcon: state => {
      const cursus = find(propEq('name', '42'))(state.me.cursus);
      return isNil(cursus) ? '' : getBadgeIconFromLevel(cursus.level);
    },
  },
  {
    id: 1,
    label: 'Logtime',
    selector: state => getMyTotalLogTime(state),
    getBadgeIcon: state => {
      const myLogs = state.me.logs;
      return isEmpty(myLogs)
        ? ''
        : getBadgeIconFromLogTime(myLogs.totalLogTime);
    },
  },
  {
    id: 2,
    label: 'Coalition score',
    selector: state => getMyCoalitionScore(state),
    getBadgeIcon: state => {
      const myCoalition = state.me.coalition;
      return isEmpty(myCoalition)
        ? ''
        : getBadgeIconFromCoalitionScore(myCoalition.userScore);
    },
  },
];

export const userBadges = [
  {
    id: 0,
    label: 'Level',
    selector: state => getUser42CursusLevel(state),
    getBadgeIcon: state => {
      const cursus = find(propEq('name', '42'))(state.user.cursus);
      return isNil(cursus) ? '' : getBadgeIconFromLevel(cursus.level);
    },
  },
  {
    id: 1,
    label: 'Logtime',
    selector: state => getUserTotalLogTime(state),
    getBadgeIcon: state => {
      const logs = state.user.logs;
      return isEmpty(logs) ? '' : getBadgeIconFromLogTime(logs.totalLogTime);
    },
  },
  {
    id: 2,
    label: 'Coalition score',
    selector: state => getUserCoalitionScore(state),
    getBadgeIcon: state => {
      const coalition = state.user.coalition;
      return isEmpty(coalition)
        ? ''
        : getBadgeIconFromCoalitionScore(coalition.userScore);
    },
  },
];
