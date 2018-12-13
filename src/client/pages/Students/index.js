import React from 'react';
import { map, isEmpty, find, propEq, reduce, length } from 'ramda';
import {
  compose,
  withStateHandlers,
  lifecycle,
  onlyUpdateForKeys,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VisibilitySensor from 'react-visibility-sensor';

import { LOADING_OFFSET, ALL_PROMO_SELECTED, FILTER_VALUES } from './constants';
import {
  Container,
  UsersPrewiewContainer,
  VisibilitySensorBox,
  Content,
  RetryRequestContainer,
  RetryRequest,
} from './styles';
import PromoFilter from '../../containers/PromoFilter';
import Graph from './Graph';
import UserPreview from '../../components/UserPreview';
import Spinner from '../../components/Spinner';
import EmptySearch from '../../components/EmptySearch';
import PagesHeader from '../../containers/PagesHeader';
import { getUsersByPromo, reqGetUsersRatio, reqGetPromo } from '../../requests';
import { getPromos, getWinWidth } from '../../selectors/app';
import { getMyLogin, getMyFriends } from '../../selectors/me';
import { loadPromos } from '../../actions/app';
import { enhanceMe, addFriend, removeFriend } from '../../actions/me';
import { isMyFriend, parseTimeKeys, filterByCoaltition } from './utils';

const Students = ({
  start,
  promos,
  selectedPromo,
  enhanceUsers,
  users,
  myLogin,
  filterBy,
  usersRatio,
  usersRatioTranches,
  isFetching,
  searchValue,
  isFetchingPossible,
  isFetchingFailed,
  addFriend,
  removeFriend,
  enhanceMe,
  friends,
  winWidth,
  coalitionFilter,
  handleChangeUsersRatio,
  handleChangeSelectedPromo,
  handleChangeStart,
  handleChangeFilterBy,
  handleChangeIsFetching,
  handleChangeSearchValue,
  handeChangeIsFetchingPossible,
  handleChangeIsFetchingFailed,
  handleChangeCoaltionFilter,
}) => (
  <Container>
    <PagesHeader>
      <Graph
        nbUsers={reduce((acc, nb) => acc + nb, 0, usersRatio)}
        usersByUnit={usersRatio}
        filterBy={filterBy}
        usersRatioTranches={usersRatioTranches}
        selectedPromo={selectedPromo}
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
        coalitionFilter={coalitionFilter}
        handleChangeCoaltionFilter={handleChangeCoaltionFilter}
      />
    </PagesHeader>
    <Content>
      <UsersPrewiewContainer>
        {map(
          user => (
            <UserPreview
              myLogin={myLogin}
              key={user.id}
              user={user}
              addFriend={addFriend}
              removeFriend={removeFriend}
              enhanceMe={enhanceMe}
              isMyFriend={isMyFriend(user.id, friends)}
              winWidth={winWidth}
            />
          ),
          filterByCoaltition(users, coalitionFilter),
        )}
        {isFetchingPossible &&
          !isFetchingFailed && (
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
                      setTimeout(() => handleChangeIsFetching(false), 300);
                    })
                    .catch(err => handleChangeIsFetchingFailed(true));
                }
              }}
            >
              <VisibilitySensorBox bottom={length(users) > 0 ? 500 : 0} />
            </VisibilitySensor>
          )}
        {isFetchingPossible && !isFetchingFailed && <Spinner />}
        {isFetchingFailed && (
          <RetryRequestContainer>
            <RetryRequest
              onClick={() => {
                getUsersByPromo(
                  selectedPromo !== ALL_PROMO_SELECTED ? selectedPromo : '',
                  LOADING_OFFSET,
                  start,
                  find(propEq('id', filterBy))(FILTER_VALUES).label,
                  searchValue,
                )
                  .then(res => {
                    handleChangeIsFetchingFailed(false);
                    if (length(res) < LOADING_OFFSET)
                      handeChangeIsFetchingPossible(false);
                    enhanceUsers(res);
                    setTimeout(() => handleChangeIsFetching(false), 300);
                  })
                  .catch(err => handleChangeIsFetchingFailed(true));
              }}
            />
          </RetryRequestContainer>
        )}
        {isEmpty(users) &&
          !isFetching &&
          !isFetchingFailed && (
            <EmptySearch
              searchValue={searchValue}
              selectedPromo={selectedPromo}
            />
          )}
      </UsersPrewiewContainer>
    </Content>
  </Container>
);

const mapStateToProps = state => ({
  promos: getPromos(state),
  myLogin: getMyLogin(state),
  friends: getMyFriends(state),
  winWidth: getWinWidth(state),
});

const actions = { loadPromos, addFriend, removeFriend, enhanceMe };

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
      initialUsersRatioTranches = [],
      initialIsFetching = false,
      initialSearchValue = '',
      initialIsFetchingPossible = true,
      initialIsFetchingFailed = false,
      initialCoaltionFilter = { 0: true, 1: true, 2: true, 3: true },
    }) => ({
      selectedPromo: initialSelectedPromo,
      users: initialUsers,
      start: initialStart,
      filterBy: initialFilterBy,
      usersRatio: initialUsersRatio,
      usersRatioTranches: initialUsersRatioTranches,
      isFetching: initialIsFetching,
      searchValue: initialSearchValue,
      isFetchingPossible: initialIsFetchingPossible,
      isFetchingFailed: initialIsFetchingFailed,
      coalitionFilter: initialCoaltionFilter,
    }),
    {
      handleChangeSelectedPromo: () => newPromo => ({
        selectedPromo: newPromo,
        start: 0,
        users: [],
        isFetchingPossible: true,
        isFetchingFailed: false,
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
        isFetchingFailed: false,
      }),
      handleChangeUsersRatio: () => newUsersRatio => ({
        usersRatio: newUsersRatio,
      }),
      handleChangeUsersRatioTranches: () => newUsersRatioTranches => ({
        usersRatioTranches: newUsersRatioTranches,
      }),
      handleChangeIsFetching: () => newValue => ({
        isFetching: newValue,
      }),
      handleChangeSearchValue: () => newValue => ({
        searchValue: newValue,
        start: 0,
        users: [],
        isFetchingPossible: true,
        isFetchingFailed: false,
      }),
      handeChangeIsFetchingPossible: () => newValue => ({
        isFetchingPossible: newValue,
      }),
      handleChangeIsFetchingFailed: () => newValue => ({
        isFetchingFailed: newValue,
      }),
      handleChangeCoaltionFilter: ({ coalitionFilter }) => newValue => ({
        coalitionFilter: { ...coalitionFilter, ...newValue },
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      this._isMount = true;
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
          .then(res => {
            this.props.handleChangeUsersRatio(res.values);
            this.props.handleChangeUsersRatioTranches(res.keys);
          })
          .catch(err => err);
      }
      this.props.handleChangeSelectedPromo(ALL_PROMO_SELECTED);
    },
    componentDidUpdate(prevProps) {
      if (
        (prevProps.selectedPromo !== this.props.selectedPromo ||
          prevProps.filterBy !== this.props.filterBy ||
          prevProps.searchValue !== this.props.searchValue) &&
        isEmpty(this.props.users) &&
        this._isMount
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
            if (length(res) < 25 && this._isMount)
              this.props.handeChangeIsFetchingPossible(false);
            this.props.handleChangeUsers(res);
            this.props.handleChangeStart(this.props.start + 25);
            reqGetUsersRatio(
              this.props.selectedPromo,
              find(propEq('id', this.props.filterBy))(FILTER_VALUES).label,
            )
              .then(res => {
                if (this._isMount) {
                  this.props.handleChangeUsersRatio(res.values);
                  this.props.handleChangeUsersRatioTranches(
                    this.props.filterBy === 1
                      ? parseTimeKeys(res.keys)
                      : res.keys,
                  );
                  this.props.handleChangeIsFetching(false);
                }
              })
              .catch(err => err);
          })
          .catch(err => {
            this.props.handleChangeIsFetchingFailed(true);
            this.props.handleChangeIsFetching(false);
          });
      }
    },
    componentWillUnmount() {
      this._isMount = false;
    },
  }),
  onlyUpdateForKeys([
    'users',
    'selectedPromo',
    'filterBy',
    'isFetching',
    'isFetchingFailed',
    'friends',
    'winWidth',
    'coalitionFilter',
  ]),
);
export default enhance(Students);
