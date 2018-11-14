import React from 'react';
import { array, number, string, func, bool } from 'prop-types';
import { find, propEq, isNil, map } from 'ramda';
import { compose, withStateHandlers } from 'recompose';

import { Container, Content, ChevIcon, SelectedValue, Value } from './styles';

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
  height = 25,
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
                if (selectedValueId !== elemValue.id) {
                  handleChangeSelectedValueId(elemValue.id);
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
