import React, { Fragment } from 'react';
import { length } from 'ramda';
import { withStateHandlers } from 'recompose';
import { func, string, number } from 'prop-types';

import { Container, Content, SearchLogo, CrossButton } from './styles';
import { eventGa } from '../../googleAnalytics';
import { SEARCH } from '../../constants/GaLabels';

const proptypes = {
  searchValue: string.isRequired,
  innerValue: string.isRequired,
  handler: func.isRequired,
  handleChangeInnerValue: func.isRequired,
  margin: number,
};

const SearchBar = ({
  handler,
  searchValue,
  innerValue,
  handleChangeInnerValue,
  margin = 25,
}) => (
  <Fragment>
    <Container margin={margin}>
      <Content
        type="text"
        spellCheck="false"
        value={innerValue}
        onKeyPress={e => {
          if (e.key === 'Enter' && searchValue !== e.target.value) {
            eventGa(SEARCH, e.target.value);
            handler(e.target.value);
          }
        }}
        onChange={e => handleChangeInnerValue(e.target.value)}
      />
      {length(innerValue) === 0 && <SearchLogo />}
      {length(innerValue) > 0 && (
        <CrossButton
          onClick={() => {
            if (length(searchValue) !== 0) handler('');
            handleChangeInnerValue('');
          }}
        />
      )}
    </Container>
  </Fragment>
);

SearchBar.proptypes = proptypes;

export default withStateHandlers(
  ({ initialInnerValue = '' }) => ({
    innerValue: initialInnerValue,
  }),
  {
    handleChangeInnerValue: () => newValue => ({
      innerValue: newValue,
    }),
  },
)(SearchBar);
