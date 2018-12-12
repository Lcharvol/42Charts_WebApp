import React, { Fragment } from 'react';
import { isNil, isEmpty } from 'ramda';
import { object, number } from 'prop-types';
import { withStateHandlers } from 'recompose';
import { Doughnut } from 'react-chartjs-2';

import {
  Container,
  TopSide,
  ProjectName,
  TierLabel,
  ProjectInfos,
  MarkContainer,
  MarkContent,
  MarkLabel,
  WrapperButton,
  UnWrapperIcon,
  WrapperIcon,
  BottomSide,
  BottomSideLabel,
  BottomSideValue,
  BottomSideElem,
  DoughnutContainer,
  DoughnutLabel,
  BottomSideLeft,
  BottomSideRight,
  FirstFinishLink,
} from './styles';
import StatusIcon from '../StatusIcon';
import { reqGetProjectDetails } from '../../requests';
import {
  getSuccessCount,
  getFailCount,
  getAllGraphData,
  getCampusSuccesGraphData,
  getCampusSuccesRateGraphData,
  graphLegendOptions,
} from './utils';
import UserAvatar from '../../components/UserAvatar';

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
          >
            {isWrapped ? <UnWrapperIcon /> : <WrapperIcon />}
          </WrapperButton>
        )}
      </ProjectInfos>

      {!isNil(myMark) && (
        <Fragment>
          <MarkLabel>{myMark}</MarkLabel>
          <MarkContainer>
            <MarkContent
              value={Math.round((myMark / 125) * 100)}
              validated={myMark >= 50}
            />
          </MarkContainer>
        </Fragment>
      )}
      <TierLabel>{`T${project.tier}`}</TierLabel>
    </TopSide>
    {!isWrapped && (
      <BottomSide>
        <BottomSideLeft>
          <BottomSideElem>
            <BottomSideValue>
              {Math.round((projectDetails.averageMark || 1) * 100) / 100}
            </BottomSideValue>
            <BottomSideLabel>Average project mark</BottomSideLabel>
          </BottomSideElem>
          <BottomSideElem>
            <BottomSideValue>
              {Math.round((projectDetails.averageRetries || 1) * 100) / 100}
            </BottomSideValue>
            <BottomSideLabel>Average project retries</BottomSideLabel>
          </BottomSideElem>
          <BottomSideElem>
            <UserAvatar
              round
              margin={0}
              profilPicture={
                isNil(projectDetails.firstFinish)
                  ? ''
                  : projectDetails.firstFinish.imageUrl
              }
            />
            <FirstFinishLink
              to={`user/${
                isNil(projectDetails.firstFinish)
                  ? ''
                  : projectDetails.firstFinish.id
              }`}
            >
              {isNil(projectDetails.firstFinish)
                ? ''
                : projectDetails.firstFinish.login}
            </FirstFinishLink>
            <BottomSideLabel>First finish</BottomSideLabel>
          </BottomSideElem>
        </BottomSideLeft>
        <BottomSideRight>
          <DoughnutContainer>
            <Doughnut
              data={getAllGraphData(
                getSuccessCount(projectDetails.validatedByCampus),
                getFailCount(projectDetails.failedByCampus),
                0,
              )}
              legend={graphLegendOptions}
              options={{
                maintainAspectRatio: false,
              }}
            />
            <DoughnutLabel>Validation rate</DoughnutLabel>
          </DoughnutContainer>
          <DoughnutContainer>
            <Doughnut
              data={getCampusSuccesGraphData(projectDetails.validatedByCampus)}
              legend={graphLegendOptions}
              options={{
                maintainAspectRatio: false,
              }}
            />
            <DoughnutLabel>Validation by Campus</DoughnutLabel>
          </DoughnutContainer>
          <DoughnutContainer>
            <Doughnut
              data={getCampusSuccesRateGraphData(
                projectDetails.validatedByCampus,
                projectDetails.failedByCampus,
              )}
              legend={graphLegendOptions}
              options={{
                maintainAspectRatio: false,
              }}
            />
            <DoughnutLabel>Validation rate by Campus</DoughnutLabel>
          </DoughnutContainer>
        </BottomSideRight>
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
