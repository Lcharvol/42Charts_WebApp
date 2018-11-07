import { combineReducers } from 'redux';

import app from './app';
import me from './me';
import time from './time';

const reducer = combineReducers({
  app,
  me,
  time,
});

export default reducer;
