import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty, map, sort, length, filter, match } from 'ramda';
import { array } from 'prop-types';

import {
  Container,
  Header,
  Title,
  AppsContainer,
  HeaderTop,
  HeaderBottom,
} from './styles';
import { getApps } from '../../selectors/apps';
import { reqGetApps } from '../../requests';
import AppElem from './AppElem';
import { loadApps, likeApp, unlikeApp } from '../../actions/apps';
import Spinner from '../../components/Spinner';
import SearchBar from '../../components/SearchBar';
import EmptySearch from '../../components/EmptySearch';

const proptypes = {
  apps: array.isRequired,
};

const filterBySearchValue = (searchValue, apps) => {
  if (length(searchValue) === 0) return apps;
  const regExp = new RegExp(searchValue, 'i');
  return filter(app => length(match(regExp, app.name)) > 0, apps);
};

const Apps = ({
  apps,
  likeApp,
  unlikeApp,
  searchValue,
  handleChangeSearchValue,
}) => {
  const filteredApps = filterBySearchValue(
    searchValue,
    sort((first, second) => second.nbLikes - first.nbLikes, apps),
  );
  return (
    <Container>
      <Header>
        <HeaderTop>
          <Title>42 Apps</Title>
        </HeaderTop>
        <HeaderBottom>
          <SearchBar
            searchValue={searchValue}
            handler={handleChangeSearchValue}
            margin={0}
          />
        </HeaderBottom>
      </Header>
      <AppsContainer>
        {map(
          app => (
            <AppElem
              key={app.id}
              app={app}
              likeApp={likeApp}
              unlikeApp={unlikeApp}
            />
          ),
          filteredApps,
        )}
        {isEmpty(filteredApps) &&
          length(searchValue) > 0 && <EmptySearch searchValue={searchValue} />}
        {isEmpty(apps) && <Spinner />}
      </AppsContainer>
    </Container>
  );
};

Apps.propTypes = proptypes;

const actions = { loadApps, likeApp, unlikeApp };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  apps: getApps(state),
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({ initialSelectedCursus = 1, initialSearchValue = '' }) => ({
      selectedCursus: initialSelectedCursus,
      searchValue: initialSearchValue,
    }),
    {
      handleChangeSelectedCursus: () => cursusId => ({
        selectedCursus: cursusId,
      }),
      handleChangeSearchValue: () => newSearchValue => ({
        searchValue: newSearchValue,
      }),
    },
  ),
  lifecycle({
    componentWillMount() {
      if (isEmpty(this.props.apps)) {
        reqGetApps()
          .then(res => this.props.loadApps(res))
          .catch(err => err);
      }
    },
  }),
);

export default enhance(Apps);
