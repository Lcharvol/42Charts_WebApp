import React from 'react';
import styled from 'styled-components';
import { length, reduce, find, propEq, isNil } from 'ramda';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

import { MAIN_COLOR, RED } from '../constants/colors';

export const getUser = state => state.user;

export const getUserLogs = state => state.user.logs;

export const getUserAllRank = state => state.user.allRank;

export const getUserPromoRank = state => state.user.promoRank;

export const getUserValidatedProjects = state =>
  reduce(
    (acc, project) =>
      project.status === 'finished' && project.finalMark >= 50 ? acc + 1 : acc,
    0,
    state.user.projects,
  );

export const getUserFailedProjects = state =>
  reduce(
    (acc, project) =>
      project.status === 'finished' && project.finalMark < 50 ? acc + 1 : acc,
    0,
    state.user.projects,
  );

export const getUserAchievementsCount = state => length(state.me.achievements);

export const getUserAllRankEvolution = state => {
  const {
    user: { allRank, oldAllRank },
  } = state;
  const diff = oldAllRank - allRank;
  const color = diff >= 0 ? MAIN_COLOR : RED;
  const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color};
  `;
  const Icon = diff >= 0 ? MdArrowDropUp : MdArrowDropDown;
  return (
    <Container>
      <Icon />
      {diff}
    </Container>
  );
};

export const getUserPromoRankEvolution = state => {
  const {
    user: { promoRank, oldPromoRank },
  } = state;
  const diff = oldPromoRank - promoRank;
  const color = diff >= 0 ? MAIN_COLOR : RED;
  const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color};
  `;
  const Icon = diff >= 0 ? MdArrowDropUp : MdArrowDropDown;
  return (
    <Container>
      <Icon />
      {diff}
    </Container>
  );
};

export const getUserAverageLevelByMonth = state => {
  const cursus = find(propEq('id', 1))(state.user.cursus);
  return !isNil(cursus) ? cursus.levelByMonth : 0;
};

export const getUserLogTime = state => {
  const logTimInSecond = state.user.logs.totalLogTime || 0;
  const days = Math.floor(logTimInSecond / 86400);
  const hours = Math.floor((logTimInSecond - days * 86400) / 3600);
  return `${days} D ${hours} H`;
};

export const getUserPreferedHostName = state =>
  state.user.logs.hostPrefered.name;

export const getUserPreferedHostTime = state => {
  const { logtimeInSeconds } = state.user.logs.hostPrefered;
  const days = Math.floor(logtimeInSeconds / 86400);
  const hours = Math.floor((logtimeInSeconds - days * 86400) / 3600);
  return `${days} Days ${hours} Hours`;
};

export const getUserCoalitionScore = state => state.user.coalition.userScore;

export const getUserCoalitionScoreInfo = state => {
  const {
    user: {
      coalition: { userScore, coalitionScore },
    },
  } = state;
  return `/ ${coalitionScore}`;
};

export const getUserCoalitionRank = state => state.user.coalition.userRank;
