import React from 'react';
import { map, isEmpty, find, propEq, reduce } from 'ramda';
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
import { getUsersByPromo, reqGetUsersRatio } from '../../requests';
import {
  getPromos,
  getTotalUsers,
  getUsersByLevels,
} from '../../selectors/app';
import { getMyLogin } from '../../selectors/me';
import { reqGetPromo } from '../../requests';
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
  handleChangeUsersRatio,
  handleChangeSelectedPromo,
  handleChangeStart,
  handleChangeFilterBy,
}) => (
  <Container>
    <Header>
      <Title>Students</Title>
      <Graph
        nbUsers={reduce((acc, nb) => acc + nb, 0, usersRatio)}
        usersByUnit={usersRatio}
      />
      <PromoFilter
        promos={promos}
        selectedPromo={selectedPromo}
        handleChangeSelectedPromo={handleChangeSelectedPromo}
        filterBy={filterBy}
        handleChangeFilterBy={handleChangeFilterBy}
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
      </UsersPrewiewContainer>
      <VisibilitySensor
        onChange={() => {
          if (!isEmpty(users)) {
            handleChangeStart(start + LOADING_OFFSET);
            getUsersByPromo(
              selectedPromo !== ALL_PROMO_SELECTED ? selectedPromo : '',
              LOADING_OFFSET,
              start,
              find(propEq('id', filterBy))(FILTER_VALUES).label,
            )
              .then(res => enhanceUsers(res))
              .catch(err => console.log('err: ', err));
          }
        }}
      >
        <VisibilitySensorBox />
      </VisibilitySensor>
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
    }) => ({
      selectedPromo: initialSelectedPromo,
      users: initialUsers,
      start: initialStart,
      filterBy: initialFilterBy,
      usersRatio: initialUsersRatio,
    }),
    {
      handleChangeSelectedPromo: () => newPromo => ({
        selectedPromo: newPromo,
        start: 0,
        users: [],
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
      }),
      handleChangeUsersRatio: () => newUsersRatio => ({
        usersRatio: newUsersRatio,
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
          prevProps.filterBy !== this.props.filterBy) &&
        isEmpty(this.props.users)
      ) {
        getUsersByPromo(
          this.props.selectedPromo !== ALL_PROMO_SELECTED
            ? this.props.selectedPromo
            : '',
          LOADING_OFFSET,
          this.props.start,
          find(propEq('id', this.props.filterBy))(FILTER_VALUES).label,
        )
          .then(res => {
            this.props.handleChangeUsers(res);
            this.props.handleChangeStart(this.props.start + LOADING_OFFSET);
          })
          .catch(err => err);
        reqGetUsersRatio(
          this.props.selectedPromo,
          find(propEq('id', this.props.filterBy))(FILTER_VALUES).label,
        )
          .then(res => this.props.handleChangeUsersRatio(res))
          .catch(err => err);
      }
    },
  }),
);
export default enhance(Ranking);
