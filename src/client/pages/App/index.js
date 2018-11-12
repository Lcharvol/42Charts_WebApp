import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';

import SideMenu from '../../containers/SideMenu';
import routes from '../../routes';
import { AppContainer } from './styles';

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => <route.component {...props} />}
  />
);

const history = createBrowserHistory();

const App = () => (
  <AppContainer>
    <Router>
      <div>
        <SideMenu history={history} routes={routes} />
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
)(App);
