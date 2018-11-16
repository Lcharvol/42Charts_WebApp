import React from 'react';
import { isEmpty, find, propEq, reduce, length } from 'ramda';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VisibilitySensor from 'react-visibility-sensor';
import { LOADING_OFFSET, ALL_PROMO_SELECTED, FILTER_VALUES } from './constants';

import {
  Container,
  UsersPrewiewContainer,
  VisibilitySensorBox,
  Title,
  Header,
  Content,
} from './styles';
import PromoFilter from './PromoFilter';
import Graph from './Graph';
import UserPreview from '../../components/UserPreview';
import Spinner from '../../components/Spinner';
import { getUsersByPromo, reqGetUsersRatio, reqGetPromo } from '../../requests';
import {
  getPromos,
  getTotalUsers,
  getUsersByLevels,
} from '../../selectors/app';
import { getMyLogin } from '../../selectors/me';
import { loadPromos } from '../../actions/app';

const Ranking = ({
  start,
  promos,
  selectedPromo,
  enhanceUsers,
  users,
  myLogin,
  totalUsers,
  usersByLevels,
  filterBy,
  usersRatio,
  isFetching,
  searchValue,
  isFetchingPossible,
  handleChangeUsersRatio,
  handleChangeSelectedPromo,
  handleChangeStart,
  handleChangeFilterBy,
  handleChangeIsFetching,
  handleChangeSearchValue,
  handeChangeIsFetchingPossible,
}) => (
  <Container>
    <Header>
      <Title>Students</Title>
      <Graph
        nbUsers={reduce((acc, nb) => acc + nb, 0, usersRatio)}
        usersByUnit={usersRatio}
        filterBy={filterBy}
      />
      <PromoFilter
        promos={promos}
        selectedPromo={selectedPromo}
        handleChangeSelectedPromo={handleChangeSelectedPromo}
        filterBy={filterBy}
        handleChangeFilterBy={handleChangeFilterBy}
        usable={!isFetching}
        handleChangeSearchValue={handleChangeSearchValue}
        searchValue={searchValue}
      />
    </Header>
    <Content>
      <UsersPrewiewContainer>
        {users.map((user, id) => (
          <UserPreview
            myLogin={myLogin}
            key={user.id}
            rank={id + 1}
            user={user}
          />
        ))}
        {isFetchingPossible && (
          <VisibilitySensor
            onChange={() => {
              if (!isEmpty(users) && !isFetching) {
                handleChangeIsFetching(true);
                handleChangeStart(start + LOADING_OFFSET);
                getUsersByPromo(
                  selectedPromo !== ALL_PROMO_SELECTED ? selectedPromo : '',
                  LOADING_OFFSET,
                  start,
                  find(propEq('id', filterBy))(FILTER_VALUES).label,
                  searchValue,
                )
                  .then(res => {
                    if (length(res) < LOADING_OFFSET)
                      handeChangeIsFetchingPossible(false);
                    enhanceUsers(res);
                    setTimeout(() => handleChangeIsFetching(false), 1000);
                  })
                  .catch(err => console.log('err: ', err));
              }
            }}
          >
            <VisibilitySensorBox>
              <Spinner />
            </VisibilitySensorBox>
          </VisibilitySensor>
        )}
      </UsersPrewiewContainer>
    </Content>
  </Container>
);

const mapStateToProps = state => ({
  promos: getPromos(state),
  myLogin: getMyLogin(state),
  totalUsers: getTotalUsers(state),
  usersByLevels: getUsersByLevels(state),
});

const actions = { loadPromos };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({
      initialSelectedPromo = '',
      initialUsers = [],
      initialStart = 0,
      initialFilterBy = 0,
      initialUsersRatio = [],
      initialIsFetching = false,
      initialSearchValue = '',
      initialIsFetchingPossible = true,
    }) => ({
      selectedPromo: initialSelectedPromo,
      users: initialUsers,
      start: initialStart,
      filterBy: initialFilterBy,
      usersRatio: initialUsersRatio,
      isFetching: initialIsFetching,
      searchValue: initialSearchValue,
      isFetchingPossible: initialIsFetchingPossible,
    }),
    {
      handleChangeSelectedPromo: () => newPromo => ({
        selectedPromo: newPromo,
        start: 0,
        users: [],
        isFetchingPossible: true,
      }),
      handleChangeUsers: () => newUsers => ({
        users: newUsers,
      }),
      handleChangeStart: () => newStart => ({
        start: newStart,
      }),
      enhanceUsers: ({ users }) => newUsers => ({
        users: [...users, ...newUsers],
      }),
      handleChangeFilterBy: () => newFilter => ({
        filterBy: newFilter,
        start: 0,
        users: [],
        isFetchingPossible: true,
      }),
      handleChangeUsersRatio: () => newUsersRatio => ({
        usersRatio: newUsersRatio,
      }),
      handleChangeIsFetching: () => newValue => ({
        isFetching: newValue,
      }),
      handleChangeSearchValue: () => newValue => ({
        searchValue: newValue,
        start: 0,
        users: [],
        isFetchingPossible: true,
      }),
      handeChangeIsFetchingPossible: () => newValue => ({
        isFetchingPossible: newValue,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      if (isEmpty(this.props.promos)) {
        reqGetPromo()
          .then(res => this.props.loadPromos(res))
          .catch(err => err);
      }
      if (isEmpty(this.props.usersRatio)) {
        reqGetUsersRatio(
          this.props.selectedPromo,
          find(propEq('id', this.props.filterBy))(FILTER_VALUES).label,
        )
          .then(res => this.props.handleChangeUsersRatio(res))
          .catch(err => err);
      }
      this.props.handleChangeSelectedPromo(ALL_PROMO_SELECTED);
    },
    componentDidUpdate(prevProps) {
      if (
        (prevProps.selectedPromo !== this.props.selectedPromo ||
          prevProps.filterBy !== this.props.filterBy ||
          prevProps.searchValue !== this.props.searchValue) &&
        isEmpty(this.props.users)
      ) {
        this.props.handleChangeIsFetching(true);
        getUsersByPromo(
          this.props.selectedPromo !== ALL_PROMO_SELECTED
            ? this.props.selectedPromo
            : '',
          25,
          this.props.start,
          find(propEq('id', this.props.filterBy))(FILTER_VALUES).label,
          this.props.searchValue,
        )
          .then(res => {
            if (length(res) < 25)
              this.props.handeChangeIsFetchingPossible(false);
            this.props.handleChangeUsers(res);
            this.props.handleChangeStart(this.props.start + 25);
            reqGetUsersRatio(
              this.props.selectedPromo,
              find(propEq('id', this.props.filterBy))(FILTER_VALUES).label,
            )
              .then(res => this.props.handleChangeUsersRatio(res))
              .catch(err => err);
            setTimeout(() => this.props.handleChangeIsFetching(false), 1000);
          })
          .catch(err => err);
      }
    },
  }),
);
export default enhance(Ranking);
