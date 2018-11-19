import React from 'react';
import { times, find, propEq, length, isEmpty, isNil } from 'ramda';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { number, func, string, object } from 'prop-types';

import {
  Container,
  TopSide,
  BottomSide,
  TimeInfo,
  Arrows,
  LeftArrow,
  RightArrow,
  HoverValue,
} from './styles';
import Separator from '../../components/Separator';
import { LOGS_FILTER_VALUES } from '../../constants/selectButtonValues';
import { MIN_YEAR } from './constants';
import {
  getMonthLabel,
  getTotalTimeOfSelectedLogsFilter,
  getHoverInfo,
} from './utils';
import Unit from './Unit';
import { DARK_BORDER_COLOR } from '../../constants/colors';

const proptypes = {
  logs: object,
  hoveredUnit: number,
  hoveredUnitValue: string,
  logsFilter: number.isRequired,
  selectedYear: number.isRequired,
  selectedMonth: number.isRequired,
  handleChangeSelectedMonth: func.isRequired,
  handleChangeSelectedYear: func.isRequired,
  handleChangeHoveredUnit: func.isRequired,
  handleChangeLogsFilter: func.isRequired,
};

const Logs = ({
  logs,
  logsFilter,
  selectedYear,
  selectedMonth,
  handleChangeSelectedMonth,
  handleChangeSelectedYear,
  hoveredUnit,
  hoveredUnitValue,
  handleChangeHoveredUnit,
  handleChangeLogsFilter,
}) => {
  const logsFilterObject = find(propEq('id', logsFilter))(LOGS_FILTER_VALUES);
  if (isEmpty(logs) || isNil(logs)) return <div />;
  return (
    <Container>
      <TopSide>
        {times(
          i => (
            <Unit
              key={i}
              id={i}
              logsFilterObject={logsFilterObject}
              logs={logs}
              selectedYear={selectedYear}
              selectedMonth={selectedMonth}
              handleChangeHoveredUnit={handleChangeHoveredUnit}
              handleChangeSelectedMonth={handleChangeSelectedMonth}
              handleChangeLogsFilter={handleChangeLogsFilter}
              hoveredUnit={hoveredUnit}
            />
          ),
          logsFilterObject.nbValue,
        )}
      </TopSide>
      <Separator color={DARK_BORDER_COLOR} />
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
                  selectedYear - 1 >= MIN_YEAR
                    ? selectedYear - 1
                    : selectedYear,
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
          {`${getHoverInfo(hoveredUnit, logsFilterObject.nbValue)} ${
            logsFilterObject.nbValue === 30
              ? `${getMonthLabel(selectedMonth - 1)} ${selectedYear}`
              : selectedYear
          }`}
        </TimeInfo>
        <HoverValue>
          {length(hoveredUnitValue) > 0
            ? hoveredUnitValue
            : getTotalTimeOfSelectedLogsFilter(
                logs,
                logsFilterObject.nbValue,
                selectedYear,
                selectedMonth - 1,
              )}
        </HoverValue>
      </BottomSide>
    </Container>
  );
};

Logs.propTypes = proptypes;

const enhance = compose(
  withStateHandlers(
    ({
      initialSelectedYear = 0,
      initialSelectedMonth = 0,
      initialHoveredUnit = undefined,
    }) => ({
      selectedYear: initialSelectedYear,
      selectedMonth: initialSelectedMonth,
      hoveredUnit: initialHoveredUnit,
      hoveredUnitValue: initialHoveredUnit,
    }),
    {
      handleChangeSelectedYear: () => newSelectedYear => ({
        selectedYear: newSelectedYear,
      }),
      handleChangeSelectedMonth: () => newSelectedMonth => ({
        selectedMonth: newSelectedMonth,
      }),
      handleChangeHoveredUnit: () => (unitId, value) => ({
        hoveredUnit: unitId,
        hoveredUnitValue: value,
      }),
    },
  ),
  lifecycle({
    componentWillMount() {
      this.props.handleChangeSelectedYear(
        this.props.currentTime.currentYear || 0,
      );
      this.props.handleChangeSelectedMonth(
        this.props.currentTime.currentMonth || 0,
      );
    },
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
