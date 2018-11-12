import React from 'react';
import { times, find, propEq } from 'ramda';
import { compose, withStateHandlers, lifecycle } from 'recompose';

import {
  Container,
  TopSide,
  BottomSide,
  Unit,
  TimeInfo,
  Arrows,
  LeftArrow,
  RightArrow,
} from './styles';
import Separator from '../../components/Separator';
import { LOGS_FILTER_VALUES } from '../../constants/selectButtonValues';
import { getMonthLabel } from './utils';

const Logs = ({
  logs,
  currentTime,
  logsFilter,
  selectedYear,
  selectedMonth,
  handleChangeSelectedMonth,
  handleChangeSelectedYear,
}) => {
  const logsFilterObject = find(propEq('id', logsFilter))(LOGS_FILTER_VALUES);
  return (
    <Container>
      {console.log('selectedMonth: ', selectedMonth)}
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
        <Arrows>
          <LeftArrow
            onClick={() => {
              if (logsFilterObject.nbValue === 30) {
                const newMonth = selectedMonth - 1;
                if (newMonth < 1) {
                  handleChangeSelectedMonth(12);
                  handleChangeSelectedYear(selectedYear - 1);
                } else handleChangeSelectedMonth(newMonth);
              }
              if (logsFilterObject.nbValue === 12)
                handleChangeSelectedYear(
                  selectedYear - 1 >= 2013 ? selectedYear - 1 : selectedYear,
                );
            }}
          />
          <RightArrow
            onClick={() => {
              if (logsFilterObject.nbValue === 30) {
                const newMonth = selectedMonth + 1;
                if (newMonth > 12) {
                  handleChangeSelectedMonth(1);
                  handleChangeSelectedYear(selectedYear + 1);
                } else handleChangeSelectedMonth(newMonth);
              }
              if (logsFilterObject.nbValue === 12)
                handleChangeSelectedYear(selectedYear + 1);
            }}
          />
        </Arrows>
        <TimeInfo>
          {logsFilterObject.nbValue === 30
            ? `${getMonthLabel(selectedMonth - 1)} ${selectedYear}`
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
      if (
        prevProps.currentTime !== this.props.currentTime ||
        prevProps.logsFilter !== this.props.logsFilter
      ) {
        this.props.handleChangeSelectedYear(this.props.currentTime.currentYear);
        this.props.handleChangeSelectedMonth(
          this.props.currentTime.currentMonth,
        );
      }
    },
  }),
);

export default enhance(Logs);
