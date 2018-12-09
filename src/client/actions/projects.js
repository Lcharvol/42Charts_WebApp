export const LOAD_PROJECTS = 'LOAD_PROJECTS';

export const loadProjects = allProjects => dispatch =>
  dispatch({
    type: LOAD_PROJECTS,
    allProjects,
  });
