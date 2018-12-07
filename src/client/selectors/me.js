import React from 'react';
import styled from 'styled-components';
import { filter, isNil, length, find, propEq } from 'ramda';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import {
  getFormatedLogtime,
  getFormatedLogtimeInDay,
  getSmicFromLog,
} from '../utils';

import { MAIN_COLOR, RED } from '../constants/colors';

export const getMe = state => state.me;

export const getMyLogin = state => state.me.login;

export const getMyDisplayname = state => state.me.displayname;

export const getMyCursus = state => state.me.cursus;

export const getMarks = state =>
  filter(project => project.status === 'finished', state.me.projects || []);

export const getMyLogs = state => state.me.logs.logs;

export const getMyProjectsValidated = state => {
  if (isNil(state.me)) return 0;
  const {
    me: { projects },
  } = state;
  const validatedProject = filter(
    project => project.status === 'finished' && project.finalMark >= 50,
    projects,
  );
  return length(validatedProject);
};

export const getMyProjectsFailed = state => {
  if (isNil(state.me)) return 0;
  const {
    me: { projects },
  } = state;
  const validatedProject = filter(
    project => project.status == 'finished' && project.finalMark < 50,
    projects,
  );
  return length(validatedProject);
};

export const getMyPromoRank = state => state.me.promoRank;

export const getMyAllRank = state => state.me.allRank;

export const getAchievementsCount = state => length(state.me.achievements);

export const getMyCoalition = state => state.me.coalition;

export const getMyCoalitionScore = state => state.me.coalition.userScore;

export const getMyCoalitionScoreInfo = state => {
  const {
    me: {
      coalition: { userScore, coalitionScore },
    },
  } = state;
  return `/ ${coalitionScore}`;
};

export const getMyCoalitionRank = state => state.me.coalition.userRank;

export const getHigherLogPerDay = state => {
  const {
    me: {
      logs: {
        higherLogInADay: { logtimeInSeconds },
      },
    },
  } = state;
  return getFormatedLogtime(logtimeInSeconds);
};

export const getHigherLogPerDayInfos = state => {
  const {
    me: {
      logs: {
        higherLogInADay: { year, month, day },
      },
    },
  } = state;
  return `${day}/${month + 1}/${year}`;
};

export const getHigherLogPerMonth = state => {
  const logtimeInSeconds = state.me.logs.higherLogInMonth.logtimeInSeconds;
  return getFormatedLogtime(logtimeInSeconds);
};

export const getHigherLogPerMonthInfos = state => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const {
    me: {
      logs: {
        higherLogInMonth: { year, month },
      },
    },
  } = state;
  return `${months[parseInt(month)]} ${year}`;
};

export const getMyNumberOfLogs = state => state.me.logs.numberOfLogs;

export const getMyTotalLogTime = state =>
  getFormatedLogtimeInDay(state.me.logs.totalLogTime);

export const getMyTotalLogTimeEquivalent = state =>
  getSmicFromLog(state.me.logs.totalLogTime);

export const getMyLogsAllRank = state => state.me.logs.allRank;

export const getMyLogsPromoRank = state => state.me.logs.promoRank;

export const getMyPreferedHostName = state => state.me.logs.hostPrefered.name;

export const getMyPreferedHostTime = state =>
  getFormatedLogtimeInDay(state.me.logs.hostPrefered.logtimeInSeconds);

export const getAverageLogsPerSession = state => {
  const averageLogTimeInSecond = Math.floor(
    state.me.logs.totalLogTime / getMyNumberOfLogs(state),
  );
  return `~ ${getFormatedLogtime(averageLogTimeInSecond)} / session`;
};

export const getMyAllRankEvolution = state => {
  const {
    me: { allRank, oldAllRank },
  } = state;
  const diff = oldAllRank - allRank;
  const color = diff >= 0 ? MAIN_COLOR : RED;
  const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color};
    margin-right: 10px;
  `;
  const Icon = diff >= 0 ? MdArrowDropUp : MdArrowDropDown;
  return (
    <Container>
      <Icon />
      {diff}
    </Container>
  );
};

export const getMyPromoRankEvolution = state => {
  const {
    me: { promoRank, oldPromoRank },
  } = state;
  const diff = oldPromoRank - promoRank;
  const color = diff >= 0 ? MAIN_COLOR : RED;
  const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color};
    margin-right: 10px;
  `;
  const Icon = diff >= 0 ? MdArrowDropUp : MdArrowDropDown;
  return (
    <Container>
      <Icon />
      {diff}
    </Container>
  );
};

export const getMyAverageLevelByMonth = state => {
  const cursus = find(propEq('id', 1))(state.me.cursus);
  return !isNil(cursus) ? cursus.levelByMonth : 0;
};

export const getMyFriends = state => state.me.friends;

export const getMyProfilPicture = state => state.me.imageUrl;

export const getMyProjects = state => state.me.projects;

export const getMyGithubLink = state => state.me.github;

export const getAllStudentsCount = state => state.me.allCount;

export const getMyPromoStudentsCount = state => state.me.promoCount;
