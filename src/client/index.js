import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './store';
import App from './pages/App';
import Auth from './auth';
import { initializeGa } from './googleAnalytics';

const initialState = {};

export const store = configureStore(initialState);

const Root = () => (
  <Provider store={store}>
    <Auth>
      <App />
    </Auth>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('__42CHARTS__'));
