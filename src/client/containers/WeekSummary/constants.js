import React from 'react';
import { StyledLink } from './styles';

import {
  getWeekSummaryTotalLogTime,
  getWeekSummaryMostUsedPost,
  getWeekSummaryAllAverageLogTime,
  getWeekSummaryMoreLogedUserLogin,
  getWeekSummaryMoreLogedUserLogTime,
  getWeekSummaryMoreLogedUserId,
} from '../../selectors/app';

export const wrappedHeight = '210px';

export const unwrappedHeight = '330px';

export const summaryElems = [
  {
    id: 0,
    label: state => '7 past days logs',
    value: state => getWeekSummaryTotalLogTime(state),
  },
  {
    id: 1,
    label: state => 'My most used post',
    value: state => getWeekSummaryMostUsedPost(state),
  },
];

export const moreSummaryElems = [
  {
    id: 0,
    label: state => 'Average users 7 past days logs',
    value: state => getWeekSummaryAllAverageLogTime(state),
  },
  {
    id: 1,
    label: state =>
      `Most Loged User (${getWeekSummaryMoreLogedUserLogTime(state)})`,
    value: state => (
      <StyledLink to={`user/${getWeekSummaryMoreLogedUserId(state)}`}>
        {getWeekSummaryMoreLogedUserLogin(state)}
      </StyledLink>
    ),
  },
];
