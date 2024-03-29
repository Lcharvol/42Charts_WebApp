import { reduce, map, find, propEq, isNil } from 'ramda';
import {
  RED,
  MAIN_COLOR,
  LIGHT_BACKGROUND_COLOR,
  campusColor,
} from '../../constants/colors';

export const getSuccessCount = sucessProjects =>
  reduce((acc, x) => acc + x.nbValidated, 0, sucessProjects || []);

export const getFailCount = failedProjects =>
  reduce((acc, x) => acc + x.nbFailed, 0, failedProjects || []);

export const getCampusSuccesGraphData = validatedByCampus => ({
  labels: map(campus => campus.name, validatedByCampus || []),
  datasets: [
    {
      data: map(campus => campus.nbValidated, validatedByCampus || []),
      backgroundColor: map(campus => {
        const campusElem = find(propEq('campusName', campus.name))(
          campusColor || [],
        );
        return isNil(campusElem) ? '' : campusElem.color;
      }, validatedByCampus || []),
      borderColor: LIGHT_BACKGROUND_COLOR,
      hoverBackgroundColor: map(campus => {
        const campusElem = find(propEq('campusName', campus.name))(
          campusColor || [],
        );
        return isNil(campusElem) ? '' : campusElem.hoverColor;
      }, validatedByCampus || []),
    },
  ],
});

export const getAllGraphData = (validatedCount, failedCount, notGraded) => ({
  labels: ['Fail', 'Validate', 'Not graded'],
  datasets: [
    {
      data: [failedCount, validatedCount, notGraded],
      backgroundColor: [RED, MAIN_COLOR, LIGHT_BACKGROUND_COLOR],
      borderColor: LIGHT_BACKGROUND_COLOR,
      hoverBackgroundColor: [RED, MAIN_COLOR, LIGHT_BACKGROUND_COLOR],
    },
  ],
});

export const getCampusSuccesRateGraphData = (
  validatedByCampus,
  failedByCampus,
) => ({
  labels: map(campus => campus.name, failedByCampus || []),
  datasets: [
    {
      data: map(campus => {
        const nbFail = campus.nbFailed;
        const campusSucess = find(propEq('name', campus.name))(
          validatedByCampus,
        );
        const nbSuccess = !isNil(campusSucess) ? campusSucess.nbValidated : 0;
        return Math.floor((nbSuccess / (nbFail + nbSuccess)) * 100);
      }, failedByCampus || []),
      backgroundColor: map(campus => {
        const campusElem = find(propEq('campusName', campus.name))(
          campusColor || [],
        );
        return isNil(campusElem) ? '' : campusElem.color;
      }, failedByCampus || []),
      borderColor: LIGHT_BACKGROUND_COLOR,
      hoverBackgroundColor: map(campus => {
        const campusElem = find(propEq('campusName', campus.name))(
          campusColor || [],
        );
        return isNil(campusElem) ? '' : campusElem.hoverColor;
      }, failedByCampus || []),
    },
  ],
});

export const graphLegendOptions = {
  display: false,
  position: 'bottom',
  fullWidth: true,
  reverse: true,
  labels: {
    fontColor: MAIN_COLOR,
  },
};
