import React from 'react';
import { map } from 'ramda';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';

const routes = [
  {
    key: 0,
    path: '/',
    component: Home,
    exact: true,
  },
];

const Routes = () => (
  <Switch>
    {map(
      route => (
        <Route {...route} />
      ),
      routes,
    )}
    <Redirect to="/" />
  </Switch>
);

export default Routes;
