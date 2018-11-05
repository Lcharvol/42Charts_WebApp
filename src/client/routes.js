import React from 'react';
import { map } from 'ramda';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Profil from './pages/Profil';
import Ranking from './pages/Ranking';
import Login from './pages/Login';

const routes = [
  {
    key: 1,
    path: '/login',
    component: Login,
  },
  {
    key: 0,
    path: '/home',
    component: Home,
    routes: [
      {
        key: 0,
        path: '/profil',
        component: Profil,
      },
      {
        key: 1,
        path: '/ranking',
        component: Ranking,
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
