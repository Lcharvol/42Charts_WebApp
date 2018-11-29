import React from 'react';
import {
  GOLD_MEDAL_COLOR,
  SILVER_MEDAL_COLOR,
  BRONZE_MEDAL_COLOR,
} from '../constants/colors';

import { MdAccessTime } from 'react-icons/md';

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
