import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './store';
import Routes from './routes';

const initialState = {};
export const store = configureStore(initialState);

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('__NEWPROJECT__'));
