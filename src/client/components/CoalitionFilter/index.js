import React from 'react';
import { map, find, propEq } from 'ramda';
import { func, object } from 'prop-types';

import { Container, ColationIcon, CoaltionIconInner } from './styles';
import { coalitionsBackground } from '../../constants/coalitions';
import { FILTER_BY_COALITION } from './constants';

const proptypes = {
  handler: func.isRequired,
  values: object.isRequired,
};

const CoalitionFilter = ({ handler, values }) => (
  <Container>
    {map(
      valueElem => (
        <ColationIcon
          key={valueElem.id}
          color={
            find(propEq('name', valueElem.name))(coalitionsBackground).color
          }
          onClick={() =>
            handler({ [valueElem.id - 1]: !values[valueElem.id - 1] })
          }
        >
          {values[valueElem.id - 1] && (
            <CoaltionIconInner
              color={
                find(propEq('name', valueElem.name))(coalitionsBackground).color
              }
            />
          )}
        </ColationIcon>
      ),
      FILTER_BY_COALITION,
    )}
  </Container>
);

CoalitionFilter.propTypes = proptypes;

export default CoalitionFilter;
