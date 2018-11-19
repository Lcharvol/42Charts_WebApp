export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_LOGS = 'LOAD_USER_LOGS';
export const RESET_USER = 'RESET_USER';

export const loadUser = user => dispatch => dispatch({ type: LOAD_USER, user });

export const loadUserLogs = logs => dispatch =>
  dispatch({ type: LOAD_USER_LOGS, logs });

export const resetUser = () => dispatch => dispatch({ type: RESET_USER });
