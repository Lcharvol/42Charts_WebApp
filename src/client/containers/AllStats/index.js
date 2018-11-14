import React from 'react';
import { map, isNil } from 'ramda';
import { withStateHandlers } from 'recompose';

import { store } from '../../index';
import { Container, StatContainer, StatLabel, StatValue } from './styles';
import { ALL_STATS_CONTENT } from '../../constants/allStatsContent';

const Stat = ({ value, label, isHover, handleChangeIsHover, secondValue }) => (
  <StatContainer
    onMouseEnter={() => handleChangeIsHover()}
    onMouseLeave={() => handleChangeIsHover()}
  >
    <StatValue>{value}</StatValue>
    <StatLabel>
      {isHover ? (!isNil(secondValue) ? secondValue : label) : label}
    </StatLabel>
  </StatContainer>
);

const EnhancedStart = withStateHandlers(
  ({ initialIsHover = false }) => ({
    isHover: initialIsHover,
  }),
  {
    handleChangeIsHover: ({ isHover }) => () => ({
      isHover: !isHover,
    }),
  },
)(Stat);

const AllStats = () => {
  const state = !isNil(store) ? store.getState() : {};
  return (
    <Container>
      {map(
        stat => (
          <EnhancedStart
            key={stat.id}
            value={stat.value(state)}
            label={stat.label}
            secondValue={stat.secondValue(state)}
          />
        ),
        ALL_STATS_CONTENT,
      )}
    </Container>
  );
};

export default AllStats;
