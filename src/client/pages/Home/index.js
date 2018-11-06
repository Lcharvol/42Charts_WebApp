import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'ramda';

import { Container } from './styles';
import { reqPing } from '../../requests';
import { getPromos } from '../../selectors/app';
import { loadPromos } from '../../actions/app';

const Home = ({ routes, ...props }) => <Container />;

const actions = { loadPromos };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  promos: getPromos(state),
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      reqPing()
        .then(res => console.log('ping: ', res))
        .catch(err => console.log('err: ', err));
    },
  }),
);
export default enhance(Home);
