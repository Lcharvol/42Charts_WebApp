import React from 'react';
import { onlyUpdateForKeys } from 'recompose';

import { UnitContainer, UnitContent } from './styles';
import { SEC_PER_DAY, SEC_PER_MONTH } from './constants';

const Unit = ({
  logsFilterObject,
  id,
  logs,
  selectedYear,
  selectedMonth,
  handleChangeHoveredUnit,
  handleChangeSelectedMonth,
  handleChangeLogsFilter,
  hoveredUnit,
}) => {
  const value = logsFilterObject.getUnitLog(
    id + 1,
    logs,
    selectedYear,
    selectedMonth,
  );
  const hours = Math.floor(value / 3600);
  const min = Math.floor((value - hours * 3600) / 60);
  return (
    <UnitContainer
      width={100 / logsFilterObject.nbValue}
      onMouseEnter={() => handleChangeHoveredUnit(id, `${hours} h ${min} min`)}
      onMouseLeave={() => handleChangeHoveredUnit(undefined, '')}
      onClick={() => {
        if (logsFilterObject.nbValue === 12) {
          handleChangeSelectedMonth(id + 1);
          handleChangeLogsFilter(0);
        }
      }}
    >
      <UnitContent
        value={
          logsFilterObject.nbValue === 12
            ? (value / SEC_PER_MONTH) * 100
            : (value / SEC_PER_DAY) * 100
        }
        isHover={hoveredUnit === id}
      />
    </UnitContainer>
  );
};

export default onlyUpdateForKeys([
  'logs',
  'selectedYear',
  'selectedMonth',
  'logsFilterObject',
  'hoveredUnit',
])(Unit);
