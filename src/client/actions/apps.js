export const LOAD_APPS = 'LOAD_APPS';

export const LIKE_APP = 'LIKE_APP';

export const UNLIKE_APP = 'UNLIKE_APP';

export const loadApps = apps => dispatch => dispatch({ type: LOAD_APPS, apps });

export const likeApp = appId => dispatch => dispatch({ type: LIKE_APP, appId });

export const unlikeApp = appId => dispatch =>
  dispatch({ type: UNLIKE_APP, appId });
