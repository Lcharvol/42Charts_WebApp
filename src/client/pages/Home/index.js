import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container } from './styles';
import { reqPing } from '../../requests';
import SideMenu from '../../containers/SideMenu';

const Home = ({ routes, ...props }) => <Container />;

const actions = {};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      reqPing()
        .then(res => console.log(res))
        .catch(err => console.log('err: ', err));
    },
  }),
);
export default enhance(Home);
