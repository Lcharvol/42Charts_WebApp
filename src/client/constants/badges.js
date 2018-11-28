import React from 'react';
import {
  FIRST_RANK_COLOR,
  SECOND_RANK_COLOR,
  THIRD_RANK_COLOR,
} from '../constants/colors';

import { MdAccessTime } from 'react-icons/md';

export const badges = [
  {
    id: 0,
    label: 'Logtime',
    color: THIRD_RANK_COLOR,
    logo: <MdAccessTime />,
    requirement: user => user.totalLogTime > 8640000,
    hoverValue: 'More than 100 days of logs',
  },
  {
    id: 1,
    label: 'Logtime',
    color: SECOND_RANK_COLOR,
    logo: <MdAccessTime />,
    hoverValue: 'More than 200 days of logs',
    requirement: user => user.totalLogTime > 17280000,
  },
  {
    id: 2,
    label: 'Logtime',
    color: FIRST_RANK_COLOR,
    logo: <MdAccessTime />,
    hoverValue: 'More than 300 days of logs',
    requirement: user => user.totalLogTime > 25920000,
  },
];
