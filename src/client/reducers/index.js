import { combineReducers } from 'redux';

import app from './app';
import me from './me';
import time from './time';
import user from './user';

const reducer = combineReducers({
  app,
  me,
  time,
  user,
});

export default reducer;
