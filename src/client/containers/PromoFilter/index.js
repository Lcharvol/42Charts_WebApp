import React from 'react';
import { isEmpty, findIndex } from 'ramda';
import { array, string, func, bool } from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';

import {
  Container,
  Label,
  SelectedBox,
  Content,
  SortLabel,
  LeftSide,
  RightSide,
} from './styles';
import { FILTER_VALUES } from '../../pages/Students/constants';
import SelectButton from '../../components/SelectButton';
import SearchBar from '../../components/SearchBar';
import { eventGa } from '../../googleAnalytics';
import { SORT } from '../../constants/GaLabels';

const propTypes = {
  promos: array,
  selectedPromo: string.isRequired,
  handleChangeSelectedPromo: func.isRequired,
  usable: bool.isRequired,
  searchValue: string.isRequired,
  displaySearchBar: bool,
};

const PromoFilter = ({
  promos,
  selectedPromo,
  filterBy,
  handleChangeSelectedPromo,
  handleChangeFilterBy,
  usable,
  handleChangeSearchValue,
  searchValue,
  displaySearchBar = true,
}) => (
  <Container>
    <Content>
      <LeftSide>
        {promos.map((promo, id) => (
          <Label
            key={id}
            isSelected={promo === selectedPromo}
            onClick={() => {
              if (usable) {
                handleChangeSelectedPromo(promo);
                eventGa(SORT, selectedPromo);
              }
            }}
          >
            {promo}
          </Label>
        ))}
        {!isEmpty(promos) && (
          <SelectedBox
            leftPosition={
              (findIndex(promo => promo === selectedPromo)(promos) >= 0
                ? findIndex(promo => promo === selectedPromo)(promos)
                : 0) *
                80 +
              7.5
            }
          />
        )}
      </LeftSide>
      <RightSide>
        <SortLabel>Sort by </SortLabel>
        <SelectButton
          values={FILTER_VALUES}
          value={filterBy}
          handler={handleChangeFilterBy}
        />
        {displaySearchBar && (
          <SearchBar
            searchValue={searchValue}
            handler={handleChangeSearchValue}
          />
        )}
      </RightSide>
    </Content>
  </Container>
);

PromoFilter.propTypes = propTypes;

export default onlyUpdateForKeys([
  'promos',
  'selectedPromo',
  'usable',
  'filterBy',
])(PromoFilter);
