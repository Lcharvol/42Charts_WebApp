import React from 'react';
import { times, filter, split, length, isNil, take, reduce } from 'ramda';

import { Container, TopSide, BottomSide, Day } from './styles';
import Separator from '../../components/Separator';

const getDayLog = (dayId, logs, currentTime) => {
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

const Logs = ({ logs, currentTime }) => (
  <Container>
    <TopSide>
      {times(
        i => (
          <Day key={i} value={getDayLog(i + 1, logs, currentTime)} />
        ),
        30,
      )}
    </TopSide>
    <Separator width={'95%'} />
    <BottomSide />
  </Container>
);

export default Logs;
