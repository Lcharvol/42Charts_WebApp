import React from 'react';
import styled from 'styled-components';

import {
  getAchievementsCount,
  getMyProjectsValidated,
  getMyProjectsFailed,
  getMyPromoRank,
  getMyAllRank,
  getMyCoalitionRank,
  getMyCoalitionScore,
  getHigherLogPerDay,
  getHigherLogPerDayInfos,
  getHigherLogPerMonth,
  getMyNumberOfLogs,
  getMyTotalLogTime,
  getMyTotalLogTimeEquivalent,
  getMyLogsAllRank,
  getMyLogsPromoRank,
  getMyPreferedHostName,
  getMyPreferedHostTime,
  getAverageLogsPerSession,
  getMyAllRankEvolution,
  getMyPromoRankEvolution,
  getHigherLogPerMonthInfos,
  getMyCoalitionScoreInfo,
  getMyAverageLevelByMonth,
  getAllStudentsCount,
  getMyPromoStudentsCount,
} from '../selectors/me';

import {
  getUserAllRank,
  getUserPromoRank,
  getUserValidatedProjects,
  getUserAchievementsCount,
  getUserAllRankEvolution,
  getUserPromoRankEvolution,
  getUserAverageLevelByMonth,
  getUserFailedProjects,
  getUserLogTime,
  getUserTotalLogTimeEquivalent,
  getUserPreferedHostName,
  getUserPreferedHostTime,
  getUserCoalitionRank,
  getUserCoalitionScore,
  getUserCoalitionScoreInfo,
  getUserAllStudentsCount,
  getUserPromoStudentsCount,
} from '../selectors/user';

const ValueContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const MY_STATS_CONTENT = [
  {
    id: 0,
    value: state => getMyProjectsValidated(state),
    secondValue: state => `${getMyProjectsFailed(state)} projects failed`,
    label: 'Projects validated',
  },
  {
    id: 1,
    value: state => getMyPromoRank(state),
    secondValue: state => (
      <ValueContainer>
        {getMyPromoRankEvolution(state)}
        {` (${getMyPromoStudentsCount(state)} students)`}
      </ValueContainer>
    ),
    label: 'Promo Rank',
  },
  {
    id: 2,
    value: state => getMyAllRank(state),
    secondValue: state => (
      <ValueContainer>
        {getMyAllRankEvolution(state)}
        {` (${getAllStudentsCount(state)} students)`}
      </ValueContainer>
    ),
    label: 'All Rank',
  },
  {
    id: 3,
    value: state => getHigherLogPerDay(state),
    secondValue: state => getHigherLogPerDayInfos(state),
    label: 'Higher Log/Day',
  },
  {
    id: 4,
    value: state => getHigherLogPerMonth(state),
    secondValue: state => getHigherLogPerMonthInfos(state),
    label: 'Higher Log/Month',
  },
  {
    id: 5,
    value: state => getAchievementsCount(state),
    secondValue: state => undefined,
    label: 'Achievements',
  },
  {
    id: 6,
    value: state => getMyCoalitionRank(state),
    secondValue: state => undefined,
    label: 'My coaliton Rank',
  },
  {
    id: 7,
    value: state => getMyCoalitionScore(state),
    secondValue: state => getMyCoalitionScoreInfo(state),
    label: 'My coaliton score',
  },
  {
    id: 8,
    value: state => getMyNumberOfLogs(state),
    secondValue: state => getAverageLogsPerSession(state),
    label: 'Number of logs',
  },
  {
    id: 9,
    value: state => getMyTotalLogTime(state),
    secondValue: state => getMyTotalLogTimeEquivalent(state),
    label: 'Total Logtime',
  },
  {
    id: 10,
    value: state => getMyLogsAllRank(state),
    secondValue: state => undefined,
    label: 'Logs All Rank',
  },
  {
    id: 11,
    value: state => getMyLogsPromoRank(state),
    secondValue: state => undefined,
    label: 'Logs Promo Rank',
  },
  {
    id: 12,
    value: state => getMyPreferedHostName(state),
    secondValue: state => getMyPreferedHostTime(state),
    label: 'Most used Computer',
  },
  {
    id: 13,
    value: state => getMyAverageLevelByMonth(state),
    secondValue: state => undefined,
    label: 'Average Level/Month',
  },
];

export const USER_STATS_CONTENT = [
  {
    id: 0,
    value: state => getUserAllRank(state),
    secondValue: state => (
      <ValueContainer>
        {getUserAllRankEvolution(state)}
        {` (${getUserAllStudentsCount(state)} students)`}
      </ValueContainer>
    ),
    label: 'All Rank',
  },
  {
    id: 1,
    value: state => getUserPromoRank(state),
    secondValue: state => (
      <ValueContainer>
        {getUserPromoRankEvolution(state)}
        {` (${getUserPromoStudentsCount(state)} students)`}
      </ValueContainer>
    ),
    label: 'Promo Rank',
  },
  {
    id: 2,
    value: state => getUserValidatedProjects(state),
    secondValue: state => `${getUserFailedProjects(state)} projects failed`,
    label: 'Validated Projects',
  },
  {
    id: 3,
    value: state => getUserAchievementsCount(state),
    secondValue: state => undefined,
    label: 'Achievements',
  },
  {
    id: 4,
    value: state => getUserAverageLevelByMonth(state),
    secondValue: state => undefined,
    label: 'Average Level/Month',
  },
  {
    id: 5,
    value: state => getUserLogTime(state),
    secondValue: state => getUserTotalLogTimeEquivalent(state),
    label: 'Total LogTime',
  },
  {
    id: 6,
    value: state => getUserPreferedHostName(state),
    secondValue: state => getUserPreferedHostTime(state),
    label: 'Most used Computer',
  },
  {
    id: 7,
    value: state => getUserCoalitionRank(state),
    secondValue: state => undefined,
    label: 'Coaliton Rank',
  },
  {
    id: 8,
    value: state => getUserCoalitionScore(state),
    secondValue: state => getUserCoalitionScoreInfo(state),
    label: 'Coaliton score',
  },
];
