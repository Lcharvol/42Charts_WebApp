import React from 'react';
import { map, isNil, isEmpty } from 'ramda';
import { withStateHandlers } from 'recompose';

import { store } from '../../index';
import { Container, StatContainer, StatLabel, StatValue } from './styles';

const Stat = ({ value, label, isHover, handleChangeIsHover, secondValue }) => (
  <StatContainer
    onMouseEnter={() => handleChangeIsHover(true)}
    onMouseLeave={() => handleChangeIsHover(false)}
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
    handleChangeIsHover: () => newValue => ({
      isHover: newValue,
    }),
  },
)(Stat);

const AllStats = ({ stats = [] }) => {
  const state = !isNil(store) ? store.getState() : {};
  if (isEmpty(state) || isEmpty(stats)) return null;
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
        stats,
      )}
    </Container>
  );
};

export default AllStats;
