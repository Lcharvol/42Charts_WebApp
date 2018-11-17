import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { drop, length } from 'ramda';

import { Container } from './styles';
import { reqGetUserById } from '../../requests';

const User = () => <Container />;

const mapStateToProps = state => ({});

const actions = {};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({ initialUser = {} }) => ({
      user: initialUser,
    }),
    {
      handleChangeSelectedPromo: () => newPromo => ({
        selectedPromo: newPromo,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      const userId = drop(1, this.props.location.search);
      if (length(userId) > 0) {
        reqGetUserById(userId)
          .then(data => console.log('user: ', data))
          .catch(err => console.log('err: ', err));
      }
    },
    componentDidUpdate(prevProps) {},
  }),
);
export default enhance(User);
