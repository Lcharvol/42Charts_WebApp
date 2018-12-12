import React from 'react';
import { array, number, string, func, bool } from 'prop-types';
import { find, propEq, isNil, map } from 'ramda';
import { compose, withStateHandlers } from 'recompose';

import {
  Container,
  Content,
  ChevIcon,
  SelectedValue,
  Value,
  Shadow,
} from './styles';
import { eventGa } from '../../googleAnalytics';
import { SORT } from '../../constants/GaLabels';

const proptypes = {
  values: array.isRequired,
  width: number,
  height: number,
  color: string,
  selectedValueId: number.isRequired,
  wrapped: bool.isRequired,
  handleChangeSelectedValueId: func.isRequired,
  handleChangeWrapped: func.isRequired,
};

const getSelectedValueLabel = (selectedValueId, values) => {
  const selectedValue = find(propEq('id', selectedValueId))(values);
  return !isNil(selectedValue) ? selectedValue.label : '';
};

const SelectButton = ({
  values = [],
  width = 100,
  height = 30,
  color = '',
  selectedValueId,
  handleChangeSelectedValueId,
  wrapped,
  handleChangeWrapped,
  handler,
  value,
}) => (
  <Container
    width={width}
    height={height}
    onClick={() => handleChangeWrapped()}
  >
    <SelectedValue>{values[value] ? values[value].label : ''}</SelectedValue>
    <ChevIcon />
    {!wrapped && (
      <Content height={height}>
        {map(
          elemValue => (
            <Value
              key={elemValue.id}
              onClick={() => {
                if (value !== elemValue.id) {
                  handleChangeSelectedValueId(elemValue.id);
                  eventGa(SORT, elemValue.label);
                  handler(elemValue.id);
                }
              }}
            >
              {elemValue.label}
            </Value>
          ),
          values,
        )}
      </Content>
    )}
    {!wrapped && <Shadow />}
  </Container>
);

SelectButton.proptypes = proptypes;

const enhance = compose(
  withStateHandlers(
    ({ initialSelectedValueId = 0, initialWrapped = true }) => ({
      selectedValueId: initialSelectedValueId,
      wrapped: initialWrapped,
    }),
    {
      handleChangeSelectedValueId: () => newId => ({
        selectedValueId: newId,
      }),
      handleChangeWrapped: ({ wrapped }) => () => ({
        wrapped: !wrapped,
      }),
    },
  ),
);

export default enhance(SelectButton);
