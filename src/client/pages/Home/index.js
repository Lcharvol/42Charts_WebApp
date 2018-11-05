import React from 'react';
import { compose, lifecycle } from 'recompose';
import { map } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link } from 'react-router-dom';

import { Container } from './styles';
import { reqPing } from '../../requests';
import SideMenu from '../../containers/SideMenu';

const fakeUser = {
  firstName: 'Lucas',
  lastName: 'Charvolin',
  login: 'Lcharvol',
  profilPicture: 'https://cdn.intra.42.fr/users/medium_lcharvol.jpg',
  mycolors: [
    {
      pos: 0,
      value: '#3498db',
      name: 'Blue',
    },
    {
      pos: 1,
      value: '#9b59b6',
      name: 'Magenta',
    },
    {
      pos: 2,
      value: '#e74c3c',
      name: 'Red',
    },
    {
      pos: 3,
      value: '#ff7f50',
      name: 'Orange',
    },
    {
      pos: 4,
      value: '#ff6b81',
      name: 'Watermelon',
    },
    {
      pos: 5,
      value: '#5352ed',
      name: 'Blue',
    },
    {
      pos: 6,
      value: '#2ed573',
      name: 'Green',
    },
  ],
};

const RouteWithSubRoutes = ({ route, user, rest }) => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} user={user} {...rest} />
    )}
  />
);

const Home = ({ routes, ...props }) => (
  <Container>
    <SideMenu user={fakeUser} routes={routes} />
    {map(
      route => (
        <RouteWithSubRoutes
          key={route.key}
          route={route}
          user={fakeUser}
          rest={props}
        />
      ),
      routes,
    )}
  </Container>
);
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
