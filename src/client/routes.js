import React from 'react';
import { map } from 'ramda';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';

const routes = [
  {
    key: 0,
    path: '/',
    component: Home,
    routes: [
      {
        key: 0,
        path: '/profil',
        component: <div />,
      },
    ],
  },
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

const Routes = () => (
  <div>
    {map(
      route => (
        <RouteWithSubRoutes {...route} />
      ),
      routes,
    )}
    {/* <Redirect to="/" /> */}
  </div>
);

export default Routes;
