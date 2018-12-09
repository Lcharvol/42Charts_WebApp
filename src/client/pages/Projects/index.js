import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map, isEmpty, find, propEq, isNil, length } from 'ramda';

import {
  Container,
  Header,
  HeaderContent,
  Content,
  ProjectsContainer,
} from './styles';
import { getAllProjects } from '../../selectors/projects';
import { getMyProjects, getMyProjectsValidated } from '../../selectors/me';
import { reqGetAllProject } from '../../requests';
import { loadProjects } from '../../actions/projects';
import ProjectPreview from '../../components/ProjectPreview';
import ProgressBar from '../../components/ProgressBar';

const Projects = ({ allProjects, myProjects, validatedProjectsCount }) => (
  <Container>
    <Header>
      <HeaderContent>
        <ProgressBar
          value={validatedProjectsCount}
          total={length(allProjects) > 0 ? length(allProjects) : 1}
          label={' projects validated'}
        />
      </HeaderContent>
    </Header>
    <Content>
      <ProjectsContainer>
        {map(project => {
          const myProject = find(propEq('name', project.name))(myProjects);
          return (
            <ProjectPreview
              key={project.id}
              project={project}
              myMark={isNil(myProject) ? undefined : myProject.finalMark}
            />
          );
        }, allProjects)}
      </ProjectsContainer>
    </Content>
  </Container>
);

const actions = { loadProjects };

const mapStateToProps = state => ({
  allProjects: getAllProjects(state),
  myProjects: getMyProjects(state),
  validatedProjectsCount: getMyProjectsValidated(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      if (isEmpty(this.props.allProjects)) {
        reqGetAllProject()
          .then(allProjects => this.props.loadProjects(allProjects))
          .catch(err => err);
      }
    },
  }),
)(Projects);
