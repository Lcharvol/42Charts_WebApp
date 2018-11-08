import React from 'react';
import {
  times,
  filter,
  split,
  length,
  isNil,
  take,
  reduce,
  find,
  propEq,
} from 'ramda';
import { compose, withStateHandlers, lifecycle } from 'recompose';

import { Container, TopSide, BottomSide, Unit, TimeInfo } from './styles';
import Separator from '../../components/Separator';
import { LOGS_FILTER_VALUES } from '../../constants/selectButtonValues';
import { getMonthLabel } from './utlis';

export const getDayLog = (dayId, logs, selectedYear, selectedMonth) => {
  if (length(logs) === 0 || isNil(logs)) return 0;
  const isGoodDay = log => {
    const { beginAt } = log;
    const splittedDate = split('-', beginAt);
    const year = parseInt(splittedDate[0]);
    const month = parseInt(splittedDate[1]);
    const day = parseInt(take(2, splittedDate[2]));
    return day === dayId && month === selectedMonth - 1;
  };
  const logsOfTheDay = filter(isGoodDay, logs);
  const reducedLogsOfTheDay = reduce(
    (acc, log) => acc + log.logtimeInSeconds,
    0,
    logsOfTheDay,
  );
  return (reducedLogsOfTheDay / 86400) * 100;
};

export const getMonthLog = (monthId, logs, selectedYear, selectedMonth) => {
  if (length(logs) === 0 || isNil(logs)) return 0;
  const isGoodMonth = log => {
    const { beginAt } = log;
    const splittedDate = split('-', beginAt);
    const year = parseInt(splittedDate[0]);
    const month = parseInt(splittedDate[1]);
    const day = parseInt(take(2, splittedDate[2]));
    return month === monthId + 1 && year === selectedYear;
  };
  const logsOfTheMonth = filter(isGoodMonth, logs);
  const reducedLogsOfTheMonth = reduce(
    (acc, log) => acc + log.logtimeInSeconds,
    0,
    logsOfTheMonth,
  );
  return (reducedLogsOfTheMonth / 2592000) * 100;
};

const Logs = ({
  logs,
  currentTime,
  logsFilter,
  selectedYear,
  selectedMonth,
}) => {
  const logsFilterObject = find(propEq('id', logsFilter))(LOGS_FILTER_VALUES);
  return (
    <Container>
      <TopSide>
        {times(
          i => (
            <Unit
              key={i}
              value={logsFilterObject.getUnitLog(
                i + 1,
                logs,
                selectedYear,
                selectedMonth,
              )}
              width={100 / logsFilterObject.nbValue}
            />
          ),
          logsFilterObject.nbValue,
        )}
      </TopSide>
      <Separator />
      <BottomSide>
        <TimeInfo>
          {logsFilterObject.nbValue === 30
            ? `${getMonthLabel(selectedMonth)} ${selectedYear}`
            : selectedYear}
        </TimeInfo>
      </BottomSide>
    </Container>
  );
};

const enhance = compose(
  withStateHandlers(
    ({ initialSelectedYear = 0, initialSelectedMonth = 0 }) => ({
      selectedYear: initialSelectedYear,
      selectedMonth: initialSelectedMonth,
    }),
    {
      handleChangeSelectedYear: () => newSelectedYear => ({
        selectedYear: newSelectedYear,
      }),
      handleChangeSelectedMonth: () => newSelectedMonth => ({
        selectedMonth: newSelectedMonth,
      }),
    },
  ),
  lifecycle({
    componentDidUpdate(prevProps) {
      if (prevProps.currentTime !== this.props.currentTime) {
        this.props.handleChangeSelectedYear(this.props.currentTime.currentYear);
        this.props.handleChangeSelectedMonth(
          this.props.currentTime.currentMonth,
        );
      }
    },
  }),
);

export default enhance(Logs);
