import { combineReducers } from 'redux';

import app from './app';
import me from './me';

const reducer = combineReducers({
  app,
  me,
});

export default reducer;
