import React from 'react';
import { isNil } from 'ramda';
import { object, number } from 'prop-types';
import { withStateHandlers } from 'recompose';
import {
  Container,
  ProjectName,
  TierLabel,
  ProjectInfos,
  MyMark,
  WrapperButton,
} from './styles';
import StatusIcon from '../StatusIcon';

const proptypes = {
  project: object.isRequired,
  myMark: number,
};

const ProjectPreview = ({ project, myMark, isHover, handleChangeIsHover }) => (
  <Container
    onMouseEnter={() => handleChangeIsHover(true)}
    onMouseLeave={() => handleChangeIsHover(false)}
  >
    <ProjectInfos>
      <StatusIcon
        status={
          isNil(myMark) ? 'noStatus' : myMark >= 50 ? 'validated' : 'failed'
        }
      />
      <ProjectName>{project.name}</ProjectName>
      {isHover && <WrapperButton />}
    </ProjectInfos>
    {!isNil(myMark) && <MyMark validated={myMark >= 50}>{myMark}</MyMark>}
    <TierLabel>{`T${project.tier}`}</TierLabel>
  </Container>
);

ProjectPreview.propTypes = proptypes;

export default withStateHandlers(
  ({ initialIsHover = false }) => ({
    isHover: initialIsHover,
  }),
  {
    handleChangeIsHover: () => newValue => ({
      isHover: newValue,
    }),
  },
)(ProjectPreview);
