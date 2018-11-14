import React from 'react';
import { isEmpty, findIndex, fromPairs } from 'ramda';
import { array, string, func } from 'prop-types';

import { Container, Label, SelectedBox, Content, FilterLabel } from './styles';
import { FILTER_VALUES } from '../constants';
import SelectButton from '../../../components/SelectButton';

const propTypes = {
  promos: array,
  selectedPromo: string.isRequired,
  handleChangeSelectedPromo: func.isRequired,
};

const PromoFilter = ({
  promos,
  selectedPromo,
  filterBy,
  handleChangeSelectedPromo,
  handleChangeFilterBy,
}) => (
  <Container>
    <Content>
      {promos.map((promo, id) => (
        <Label
          key={id}
          isSelected={promo === selectedPromo}
          onClick={() => handleChangeSelectedPromo(promo)}
        >
          {promo}
        </Label>
      ))}
      {!isEmpty(promos) && (
        <SelectedBox
          leftPosition={
            findIndex(promo => promo === selectedPromo)(promos) * 80 + 7.5
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

export default PromoFilter;
