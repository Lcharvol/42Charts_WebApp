import React from 'react';

import { func, string } from 'prop-types';

import { Container } from './styles';

const proptypes = {
  handleChangeSearchValue: func.isRequired,
  searchValue: string.isRequired,
};

const SearchBar = ({ handleChangeSearchValue, searchValue }) => (
  <Container
    type="text"
    spellCheck="false"
    onKeyPress={e => {
      if (e.key === 'Enter' && searchValue !== e.target.value)
        handleChangeSearchValue(e.target.value);
    }}
  />
);

SearchBar.proptypes = proptypes;

export default SearchBar;
