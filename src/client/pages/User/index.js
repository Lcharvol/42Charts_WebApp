import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { drop, length, isEmpty } from 'ramda';

import { Container } from './styles';
import { reqGetUserById } from '../../requests';
import ProfilHeader from '../../containers/ProfilHeader';

const User = ({ user, winWidth }) => {
  if (isEmpty(user)) return <div />;
  return (
    <Container>
      <ProfilHeader
        winWidth={winWidth}
        coalition={user.coalition}
        profilPicture={user.imageUrl}
        cursus={user.cursus}
        user={user}
      />
    </Container>
  );
};

const mapStateToProps = state => ({});

const actions = {};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({ initialUser = {}, initialWinWidth = window.innerWidth }) => ({
      user: initialUser,
      winWidth: initialWinWidth,
    }),
    {
      loadUser: () => user => ({
        user,
      }),
      handleChangeWinWidth: () => newWinWidth => ({
        winWidth: newWinWidth,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      const userId = drop(1, this.props.location.search);
      if (length(userId) > 0) {
        reqGetUserById(userId)
          .then(data => this.props.loadUser(data))
          .catch(err => err);
      }
      window.addEventListener('resize', event =>
        this.props.handleChangeWinWidth(event.srcElement.innerWidth),
      );
    },
    componentDidUpdate(prevProps) {},
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.handleChangeWinWidth);
    },
  }),
);
export default enhance(User);
