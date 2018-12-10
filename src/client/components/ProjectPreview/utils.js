import { reduce } from 'ramda';

export const getSuccessCount = sucessProjects =>
  reduce((acc, x) => acc + x.nbValidated, 0, sucessProjects || []);

export const getFailCount = failedProjects =>
  reduce((acc, x) => acc + x.nbFailed, 0, failedProjects || []);
