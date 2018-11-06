export const ENHANCE_ME = 'ENHANCE_ME';

export const enhanceMe = me => dispatch =>
  dispatch({
    type: ENHANCE_ME,
    me,
  });
