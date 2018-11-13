import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map } from 'ramda';

import { Container, TopSide, BottomSide } from './styles';
import UsersByLevel from '../../containers/UsersByLevel';
import { getUsersByLevels, getTotalUsers } from '../../selectors/app';

const Users = ({ usersByLevels, totalUsers }) => (
  <Container>
    <TopSide>
      <UsersByLevel usersByLevels={usersByLevels} totalUsers={totalUsers} />
    </TopSide>
    <BottomSide />
  </Container>
);

const mapStateToProps = state => ({
  usersByLevels: getUsersByLevels(state),
  totalUsers: getTotalUsers(state),
});

const actions = {};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);
export default enhance(Users);
