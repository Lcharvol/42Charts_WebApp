import React from 'react';
import { times, find, propEq } from 'ramda';
import { compose, withStateHandlers, lifecycle } from 'recompose';

import { Container, TopSide, BottomSide, Unit, TimeInfo } from './styles';
import Separator from '../../components/Separator';
import { LOGS_FILTER_VALUES } from '../../constants/selectButtonValues';
import { getMonthLabel } from './utils';

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
