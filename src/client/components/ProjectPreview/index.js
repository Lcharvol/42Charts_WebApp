import React from 'react';
import { isNil } from 'ramda';
import { object, number } from 'prop-types';

import {
  Container,
  ProjectName,
  TierLabel,
  ProjectInfos,
  MyMark,
} from './styles';

const proptypes = {
  project: object.isRequired,
  myMark: number,
};

const ProjectPreview = ({ project, myMark }) => (
  <Container>
    <ProjectInfos>
      <ProjectName>{project.name}</ProjectName>
    </ProjectInfos>
    {!isNil(myMark) && <MyMark validated={myMark >= 50}>{myMark}</MyMark>}
    <TierLabel>{`T${project.tier}`}</TierLabel>
  </Container>
);

ProjectPreview.propTypes = proptypes;

export default ProjectPreview;
