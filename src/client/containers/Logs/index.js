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

import { Container, TopSide, BottomSide, Unit } from './styles';
import Separator from '../../components/Separator';
import { LOGS_FILTER_VALUES } from '../../constants/selectButtonValues';

export const getDayLog = (dayId, logs, currentTime) => {
  const { currentDay, currentMonth, currentYear } = currentTime;
  if (length(logs) === 0 || isNil(logs)) return 0;
  const isGoodDay = log => {
    const { beginAt } = log;
    const splittedDate = split('-', beginAt);
    const year = parseInt(splittedDate[0]);
    const month = parseInt(splittedDate[1]);
    const day = parseInt(take(2, splittedDate[2]));
    return day === dayId && month === currentMonth - 1;
  };
  const logsOfTheDay = filter(isGoodDay, logs);
  const reducedLogsOfTheDay = reduce(
    (acc, log) => acc + log.logtimeInSeconds,
    0,
    logsOfTheDay,
  );
  return (reducedLogsOfTheDay / 86400) * 100;
};

export const getMonthLog = (monthId, logs, currentTime) => {
  const { currentDay, currentMonth, currentYear } = currentTime;
  if (length(logs) === 0 || isNil(logs)) return 0;
  const isGoodMonth = log => {
    const { beginAt } = log;
    const splittedDate = split('-', beginAt);
    const year = parseInt(splittedDate[0]);
    const month = parseInt(splittedDate[1]);
    const day = parseInt(take(2, splittedDate[2]));
    return month === monthId + 1 && year === currentYear - 1;
  };
  const logsOfTheMonth = filter(isGoodMonth, logs);
  const reducedLogsOfTheMonth = reduce(
    (acc, log) => acc + log.logtimeInSeconds,
    0,
    logsOfTheMonth,
  );
  return (reducedLogsOfTheMonth / 2592000) * 100;
};

const Logs = ({ logs, currentTime, logsFilter }) => {
  const logsFilterObject = find(propEq('id', logsFilter))(LOGS_FILTER_VALUES);
  console.log('logsFilterObject: ', logsFilterObject);
  return (
    <Container>
      <TopSide>
        {times(
          i => (
            <Unit
              key={i}
              value={logsFilterObject.getUnitLog(i + 1, logs, currentTime)}
              width={100 / logsFilterObject.nbValue}
            />
          ),
          logsFilterObject.nbValue,
        )}
      </TopSide>
      <Separator />
      <BottomSide />
    </Container>
  );
};

export default Logs;
