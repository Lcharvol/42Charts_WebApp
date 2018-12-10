import React from 'react';
import { array, object, func } from 'prop-types';
import { map } from 'ramda';

import {
  Container,
  Label,
  StatusElem,
  UnCheckedIcon,
  CheckedIcon,
} from './styles';

const proptypes = {
  values: array.isRequired,
  value: object.isRequired,
  handler: func.isRequired,
};

const StatusFilterButtons = ({ values = [], value, handler }) => (
  <Container>
    <Label>Status: </Label>
    {map(
      valueElem => (
        <StatusElem key={valueElem.id} onClick={() => handler(valueElem.label)}>
          {value[valueElem.label] ? (
            <CheckedIcon color={valueElem.color} />
          ) : (
            <UnCheckedIcon color={valueElem.color} />
          )}
        </StatusElem>
      ),
      values,
    )}
  </Container>
);

StatusFilterButtons.propTypes = proptypes;

export default StatusFilterButtons;
