import React from 'react';
import { compose, lifecycle, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  map,
  isEmpty,
  find,
  propEq,
  isNil,
  length,
  filter,
  contains,
} from 'ramda';

import {
  Container,
  Header,
  HeaderContent,
  Content,
  ProjectsContainer,
  OptionContainer,
  OptionLabel,
} from './styles';
import { getAllProjects } from '../../selectors/projects';
import { getMyProjects, getMyProjectsValidated } from '../../selectors/me';
import { reqGetAllProject } from '../../requests';
import { loadProjects } from '../../actions/projects';
import ProjectPreview from '../../components/ProjectPreview';
import ProgressBar from '../../components/ProgressBar';
import SelectButton from '../../components/SelectButton';
import SearchBar from '../../components/SearchBar';
import StatusFilterButtons from './StatusFilterButtons';
import { sortAndFilterProjects } from './utils.js';
import {
  supportedProjectsNames,
  SORT_BY_VALUES,
  FILTER_BY_STATUS,
} from './constants';

const Projects = ({
  allProjects,
  myProjects,
  validatedProjectsCount,
  sortValue,
  statusFilterValue,
  searchValue,
  handleChangeSortValue,
  handleChangeStatusFilterValue,
  handleChangeSearchValue,
}) => (
  <Container>
    <Header>
      <HeaderContent>
        <ProgressBar
          value={validatedProjectsCount}
          total={length(allProjects) > 0 ? length(allProjects) : 1}
          label={' projects validated'}
        />
      </HeaderContent>
      <OptionContainer>
        <OptionLabel>Sort by:</OptionLabel>
        <SelectButton
          values={SORT_BY_VALUES}
          value={sortValue}
          handler={handleChangeSortValue}
        />
        <StatusFilterButtons
          values={FILTER_BY_STATUS}
          value={statusFilterValue}
          handler={handleChangeStatusFilterValue}
        />
        <SearchBar value={searchValue} handler={handleChangeSearchValue} />
      </OptionContainer>
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
        }, sortAndFilterProjects(allProjects, sortValue, statusFilterValue, searchValue, myProjects))}
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
          .then(allProjects =>
            this.props.loadProjects(
              filter(
                project => contains(project.name, supportedProjectsNames),
                allProjects,
              ),
            ),
          )
          .catch(err => err);
      }
    },
  }),
  withStateHandlers(
    ({
      initialSortValue = 0,
      initialStatusFilterValue = { none: true, validated: true, failed: true },
      initialSearchValue = '',
    }) => ({
      sortValue: initialSortValue,
      statusFilterValue: initialStatusFilterValue,
      searchValue: initialSearchValue,
    }),
    {
      handleChangeSortValue: () => newValue => ({
        sortValue: newValue,
      }),
      handleChangeStatusFilterValue: ({ statusFilterValue }) => statusName => ({
        statusFilterValue: {
          ...statusFilterValue,
          [statusName]: !statusFilterValue[statusName],
        },
      }),
      handleChangeSearchValue: () => newValue => ({
        searchValue: newValue,
      }),
    },
  ),
)(Projects);
