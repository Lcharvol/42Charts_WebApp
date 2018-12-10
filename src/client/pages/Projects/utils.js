import { find, propEq, filter, isNil, length, match } from 'ramda';

import { SORT_BY_VALUES } from './constants';

export const sortAndFilterProjects = (
  projects,
  sortValue,
  filterStatusValue,
  searchValue,
  myProjects,
) => {
  const sortFunc = find(propEq('id', sortValue))(SORT_BY_VALUES).sortFunc;
  const filteredProjects = filter(project => {
    const myProject = find(propEq('name', project.name))(myProjects);
    if (!isNil(myProject) > 0) {
      const status = myProject.status;
      if (status === 'finished' && filterStatusValue.validated === true)
        return true;
      else if (status === 'failed' && filterStatusValue.failed === true)
        return true;
      else if (
        filterStatusValue.none === true &&
        status !== 'failed' &&
        status !== 'finished'
      )
        return true;
      else return false;
    } else if (filterStatusValue.none === true) return true;
    else return false;
  }, projects);
  const sortedProject = sortFunc(filteredProjects);
  if (length(searchValue) > 0) {
    const reg = new RegExp(searchValue, 'i');
    return filter(
      project => length(match(reg, project.name)) > 0,
      sortedProject,
    );
  } else return sortedProject;
};
