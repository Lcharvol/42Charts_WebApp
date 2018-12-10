import React from 'react';
import { isNil, isEmpty } from 'ramda';
import { object, number } from 'prop-types';
import { withStateHandlers } from 'recompose';
import {
  Container,
  TopSide,
  ProjectName,
  TierLabel,
  ProjectInfos,
  MyMark,
  WrapperButton,
  BottomSide,
  BottomSideLabel,
  BottomSideValue,
  BottomSideElem,
} from './styles';
import StatusIcon from '../StatusIcon';
import { reqGetProjectDetails } from '../../requests';
import ProjectValidationGraph from './ProjectValidationGraph';
import { getSuccessCount, getFailCount } from './utils';

const proptypes = {
  project: object.isRequired,
  myMark: number,
};

const ProjectPreview = ({
  project,
  myMark,
  isHover,
  isWrapped,
  projectDetails,
  handleChangeIsHover,
  handleChangeIsWrapped,
  handleChangeProjectDetails,
}) => (
  <Container
    onMouseEnter={() => handleChangeIsHover(true)}
    onMouseLeave={() => handleChangeIsHover(false)}
    isWrapped={isWrapped}
  >
    <TopSide>
      <ProjectInfos>
        <StatusIcon
          status={
            isNil(myMark) ? 'noStatus' : myMark >= 50 ? 'validated' : 'failed'
          }
        />
        <ProjectName>{project.name}</ProjectName>
        {isHover && (
          <WrapperButton
            onClick={() => {
              if (isEmpty(projectDetails)) {
                reqGetProjectDetails(project.id)
                  .then(res => handleChangeProjectDetails(res))
                  .catch(err => err);
              }
              handleChangeIsWrapped(!isWrapped);
            }}
          />
        )}
      </ProjectInfos>
      {!isNil(myMark) && <MyMark validated={myMark >= 50}>{myMark}</MyMark>}
      <TierLabel>{`T${project.tier}`}</TierLabel>
    </TopSide>
    {!isWrapped && (
      <BottomSide>
        <BottomSideElem>
          <BottomSideLabel>Average project mark</BottomSideLabel>
          <BottomSideValue>{projectDetails.averageMark}</BottomSideValue>
        </BottomSideElem>
        <BottomSideElem>
          <BottomSideLabel>Average project retries</BottomSideLabel>
          <BottomSideValue>{projectDetails.averageRetries}</BottomSideValue>
        </BottomSideElem>
        <ProjectValidationGraph
          successRate={Math.floor(
            (getSuccessCount(projectDetails.validatedByCampus) /
              (getSuccessCount(projectDetails.validatedByCampus) +
                getFailCount(projectDetails.failedByCampus))) *
              100,
          )}
        />
      </BottomSide>
    )}
  </Container>
);

ProjectPreview.propTypes = proptypes;

export default withStateHandlers(
  ({
    initialIsHover = false,
    initialIsWrapped = true,
    initialProjectDetails = {},
  }) => ({
    isHover: initialIsHover,
    isWrapped: initialIsWrapped,
    projectDetails: initialProjectDetails,
  }),
  {
    handleChangeIsHover: () => newValue => ({
      isHover: newValue,
    }),
    handleChangeIsWrapped: () => newValue => ({
      isWrapped: newValue,
    }),
    handleChangeProjectDetails: () => details => ({
      projectDetails: details,
    }),
  },
)(ProjectPreview);
