export const LOAD_PROJECTS = 'LOAD_PROJECTS';

export const loadProjects = allProjects => dispatch => ({
  type: LOAD_PROJECTS,
  allProjects,
});
