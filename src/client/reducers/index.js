import { combineReducers } from 'redux';

import app from './app';
import me from './me';
import time from './time';
import user from './user';
import apps from './apps';
import projects from './projects';

const reducer = combineReducers({
  app,
  me,
  time,
  user,
  apps,
  projects,
});

export default reducer;
