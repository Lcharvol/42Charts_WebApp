import React from 'react';
import { isEmpty, findIndex, isNil } from 'ramda';
import { array, string, func, bool, object } from 'prop-types';
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
import {
  FILTER_VALUES,
  CAMPUS_FILTER_VALUES,
} from '../../pages/Students/constants';
import SelectButton from '../../components/SelectButton';
import SearchBar from '../../components/SearchBar';
import CoalitionFilter from '../../components/CoalitionFilter';
import { eventGa } from '../../googleAnalytics';
import { SORT } from '../../constants/GaLabels';

const propTypes = {
  promos: array,
  selectedPromo: string.isRequired,
  handleChangeSelectedPromo: func.isRequired,
  usable: bool.isRequired,
  searchValue: string.isRequired,
  displaySearchBar: bool,
  coalitionFilter: object,
  handleChangeCoaltionFilter: func,
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
  campusFilter,
  displaySearchBar = true,
  coalitionFilter,
  handleChangeCoaltionFilter,
  handleChangeCampusFilter,
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
        <SortLabel>Campus </SortLabel>
        <SelectButton
          values={CAMPUS_FILTER_VALUES}
          value={campusFilter}
          handler={handleChangeCampusFilter}
        />
        {displaySearchBar && (
          <SearchBar
            searchValue={searchValue}
            handler={handleChangeSearchValue}
          />
        )}
        {!isNil(handleChangeCoaltionFilter) && (
          <CoalitionFilter
            values={coalitionFilter}
            handler={handleChangeCoaltionFilter}
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
  'coalitionFilter',
  'campusFilter',
])(PromoFilter);
