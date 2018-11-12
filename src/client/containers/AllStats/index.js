import React from 'react';
import { map, isNil } from 'ramda';

import { store } from '../../index';

import { Container, StatContainer, StatLabel, StatValue } from './styles';
import { ALL_STATS_CONTENT } from '../../constants/allStatsContent';

const Stat = ({ value, label }) => (
  <StatContainer>
    <StatLabel>{value}</StatLabel>
    <StatValue>{label}</StatValue>
  </StatContainer>
);

const AllStats = () => {
  const state = !isNil(store) ? store.getState() : {};
  return (
    <Container>
      {map(
        stat => (
          <Stat key={stat.id} value={stat.value(state)} label={stat.label} />
        ),
        ALL_STATS_CONTENT,
      )}
    </Container>
  );
};

export default AllStats;
