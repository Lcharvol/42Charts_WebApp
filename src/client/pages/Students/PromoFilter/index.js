import React from 'react';
import { isEmpty, findIndex } from 'ramda';
import { array, string, func, bool } from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';

import { Container, Label, SelectedBox, Content, FilterLabel } from './styles';
import { FILTER_VALUES } from '../constants';
import SelectButton from '../../../components/SelectButton';

const propTypes = {
  promos: array,
  selectedPromo: string.isRequired,
  handleChangeSelectedPromo: func.isRequired,
  usable: bool.isRequired,
};

const PromoFilter = ({
  promos,
  selectedPromo,
  filterBy,
  handleChangeSelectedPromo,
  handleChangeFilterBy,
  usable,
}) => (
  <Container>
    <Content>
      {promos.map((promo, id) => (
        <Label
          key={id}
          isSelected={promo === selectedPromo}
          onClick={() => usable && handleChangeSelectedPromo(promo)}
        >
          {promo}
        </Label>
      ))}
      {!isEmpty(promos) && (
        <SelectedBox
          leftPosition={
            (findIndex(promo => promo === selectedPromo)(promos) || 0) * 80 +
            7.5
          }
        />
      )}
      <FilterLabel>Filter by </FilterLabel>
      <SelectButton
        values={FILTER_VALUES}
        value={filterBy}
        handler={handleChangeFilterBy}
      />
    </Content>
  </Container>
);

PromoFilter.propTypes = propTypes;

export default onlyUpdateForKeys(['promos', 'selectedPromo', 'usable'])(
  PromoFilter,
);
