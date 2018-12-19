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

export const GOLD1 = 'https://s3.eu-west-3.amazonaws.com/42charts/gold1.png';
export const GOLD2 = 'https://s3.eu-west-3.amazonaws.com/42charts/gold2.png';
export const GOLD3 = 'https://s3.eu-west-3.amazonaws.com/42charts/gold3.png';
export const SILVER1 =
  'https://s3.eu-west-3.amazonaws.com/42charts/silver1.png';
export const SILVER2 =
  'https://s3.eu-west-3.amazonaws.com/42charts/silver2.png';
export const SILVER3 =
  'https://s3.eu-west-3.amazonaws.com/42charts/silver3.png';
export const BRONZE1 =
  'https://s3.eu-west-3.amazonaws.com/42charts/bronze1.png';
export const BRONZE2 =
  'https://s3.eu-west-3.amazonaws.com/42charts/bronze2.png';
export const BRONZE3 =
  'https://s3.eu-west-3.amazonaws.com/42charts/bronze3.png';
export const PLATINIUM1 =
  'https://s3.eu-west-3.amazonaws.com/42charts/plat1.png';
export const PLATINIUM2 =
  'https://s3.eu-west-3.amazonaws.com/42charts/plat2.png';
export const PLATINIUM3 =
  'https://s3.eu-west-3.amazonaws.com/42charts/plat3.png';
export const DIAMOND1 =
  'https://s3.eu-west-3.amazonaws.com/42charts/diamond1.png';
export const DIAMOND2 =
  'https://s3.eu-west-3.amazonaws.com/42charts/diamond2.png';
export const DIAMOND3 =
  'https://s3.eu-west-3.amazonaws.com/42charts/diamond3.png';

export const badges = [
  {
    id: 0,
    label: 'Logtime',
    getIcon: user => getBadgeIconFromLogTime(user.totalLogTime || 0).icon,
    getHoverValue: user =>
      `More than ${
        getBadgeIconFromLogTime(user.totalLogTime || 0).hoverValue
      } days of logs`,
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
      return getBadgeIconFromLogTime(
        isEmpty(myLogs) ? undefined : myLogs.totalLogTime,
      );
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
      return getBadgeIconFromLogTime(
        isEmpty(logs) ? undefined : logs.totalLogTime,
      );
    },
  },
  {
    id: 2,
    label: 'Coalition score',
    selector: state => getUserCoalitionScore(state),
    getBadgeIcon: state => {
      const coalition = state.user.coalition;
      return getBadgeIconFromCoalitionScore(
        isEmpty(coalition) ? undefined : coalition.userScore,
      );
    },
  },
];
