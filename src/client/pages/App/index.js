import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SideMenu from '../../containers/SideMenu';
import routes from '../../routes';
import { AppContainer } from './styles';

const fakeUser = {
  firstName: 'Lucas',
  lastName: 'Charvolin',
  login: 'Lcharvol',
  profilPicture: 'https://cdn.intra.42.fr/users/medium_lcharvol.jpg',
  lvl: 16.03,
};

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => <route.component {...props} />}
  />
);

const App = () => (
  <AppContainer>
    <Router>
      <div>
        <SideMenu user={fakeUser} routes={routes} />
        {routes.map(route => (
          <RouteWithSubRoutes key={route.id} {...route} />
        ))}
      </div>
    </Router>
  </AppContainer>
);

const actions = {};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  lifecycle({
    componentWillMount() {},
  }),
)(App);
