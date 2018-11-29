import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';

import SideMenu from '../../containers/SideMenu';
import routes from '../../routes';
import { AppContainer } from './styles';
import { initializeGa } from '../../googleAnalytics';
import { updateWinWidth } from '../../actions/app';

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => <route.component {...props} />}
  />
);

const history = createBrowserHistory();

const App = () => {
  initializeGa();
  return (
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
};

const actions = { updateWinWidth };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      window.addEventListener('resize', this.props.updateWinWidth);
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWinWidth);
    },
  }),
)(App);
