import React from 'react';
import styled from 'styled-components';
import { length, reduce } from 'ramda';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

import { MAIN_COLOR, RED } from '../constants/colors';

export const getUser = state => state.user;

export const getUserLogs = state => state.user.logs;

export const getUserAllRank = state => state.user.allRank;

export const getUserPromoRank = state => state.user.promoRank;

export const getUserValidatedProjects = state =>
  reduce(
    (acc, project) => (project.status === 'finished' ? acc + 1 : acc),
    0,
    state.user.projects,
  );

export const getUserAchievementsCount = state => length(state.me.achievements);

export const getUserAllRankEvolution = state => {
  const {
    user: { allRank, oldAllRank },
  } = state;
  const diff = allRank - oldAllRank;
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
  const diff = promoRank - oldPromoRank;
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
